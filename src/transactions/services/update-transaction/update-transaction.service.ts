import { UpdateTransactionAdapter } from "@/transactions/adapters/update-transaction-adapter";
import { Transactions } from "@/transactions/transactions.entity";
import { TypeOrmTransactionsRepositoryAdapter } from "@/transactions/typeorm/typeorm-transactions.repository";
import { TransactionsRepository } from "@/transactions/types/transactions.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UpdateTransactionService {
  constructor(
    @InjectRepository(TypeOrmTransactionsRepositoryAdapter)
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute(payload: UpdateTransactionAdapter) {
    const transaction = new Transactions(payload);

    const updated_transaction =
      await this.transactionsRepository.updateTransaction(transaction);

    return updated_transaction;
  }
}
