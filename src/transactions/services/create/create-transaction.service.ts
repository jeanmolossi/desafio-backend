import { CreateTransactionAdapter } from "@/transactions/adapters/create-transaction-adapter";
import { Transactions } from "@/transactions/transactions.entity";
import { TransactionsRepository } from "@/transactions/types/transactions.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateTransactionService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute(payload: CreateTransactionAdapter) {
    const transaction = new Transactions(payload);

    const newTransaction = await this.transactionsRepository.createTransaction(
      transaction
    );

    return newTransaction;
  }
}
