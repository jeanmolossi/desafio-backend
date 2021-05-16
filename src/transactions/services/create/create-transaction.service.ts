import { CreateTransactionAdapter } from "@/transactions/adapters/create-transaction-adapter";
import { Transactions } from "@/transactions/transactions.entity";
import { TypeOrmTransactionsRepositoryAdapter } from "@/transactions/typeorm/typeorm-transactions.repository";
import { TransactionsRepository } from "@/transactions/types/transactions.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CreateTransactionService {
  constructor(
    @InjectRepository(TypeOrmTransactionsRepositoryAdapter)
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute(payload: CreateTransactionAdapter) {
    const transaction = new Transactions({
      ...payload,
      brl_received_value: 150,
      convertion_value: 250,
    });

    const newTransaction = await this.transactionsRepository.createTransaction(
      transaction
    );

    return newTransaction;
  }
}
