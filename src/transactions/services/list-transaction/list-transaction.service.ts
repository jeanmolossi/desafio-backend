import { TypeOrmTransactionsRepositoryAdapter } from "@/transactions/typeorm/typeorm-transactions.repository";
import { TransactionsRepository } from "@/transactions/types/transactions.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions } from "typeorm";

@Injectable()
export class ListTransactionService {
  constructor(
    @InjectRepository(TypeOrmTransactionsRepositoryAdapter)
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute(page = 1, take = 5) {
    const skip: FindManyOptions["skip"] = take * (page - 1);

    const { transactions, total } =
      await this.transactionsRepository.listTransactions({
        take,
        skip,
      });

    const transaction_with_hypermidia = transactions.map((transaction) => {
      return {
        ...transaction,
        entities: [
          {
            transaction: `http://localhost:3000/transactions?id=${transaction.id}`,
          },
        ],
      };
    });

    const has_next_page =
      Math.ceil(total / take) === +page
        ? null
        : `http://localhost:3000/transactions/list?page=${
            +page + 1
          }&limit=${take}`;

    const has_prev_page =
      page <= 1
        ? null
        : `http://localhost:3000/transactions/list?page=${
            +page - 1
          }&limit=${take}`;

    return {
      transactions: transaction_with_hypermidia,
      next: has_next_page,
      prev: has_prev_page,
      in_page: transactions.length,
      total,
    };
  }
}
