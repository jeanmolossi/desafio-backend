import { FilterTransactionAdapter } from "@/transactions/adapters/filter-transaction-adapter";
import { TypeOrmTransactionsRepositoryAdapter } from "@/transactions/typeorm/typeorm-transactions.repository";
import { TransactionsRepository } from "@/transactions/types/transactions.repository";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions } from "typeorm";

@Injectable()
export class SearchTransactionService {
  constructor(
    @InjectRepository(TypeOrmTransactionsRepositoryAdapter)
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute(filter: FilterTransactionAdapter) {
    if (
      !Object.values(filter).flatMap((value) => (value ? !!value : [])).length
    ) {
      throw new BadRequestException(
        "Você deve fornecer ao menos 1 filtro de busca"
      );
    }

    const { id, received_coin } = filter;

    const where: FindOneOptions["where"] = {};

    if (id) Object.assign(where, { id });
    if (received_coin) Object.assign(where, { received_coin });

    return this.transactionsRepository.searchTransaction({ where });
  }
}
