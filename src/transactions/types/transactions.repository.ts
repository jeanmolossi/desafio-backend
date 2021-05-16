import { FindManyOptions, FindOneOptions } from "typeorm";
import { Transactions } from "../transactions.entity";

export interface TransactionsRepository {
  createTransaction(transaction: Transactions): Promise<Transactions>;
  updateTransaction(transaction: Transactions): Promise<Transactions>;
  deleteTransaction(id: string): Promise<boolean>;
  searchTransaction(
    findOptions: FindOneOptions
  ): Promise<Transactions | undefined>;
  listTransactions(findOptions: FindManyOptions): Promise<Transactions[]>;
}
