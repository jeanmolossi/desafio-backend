import {
  EntityRepository,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from "typeorm";
import { Transactions } from "../transactions.entity";
import { TransactionsRepository } from "../types/transactions.repository";
import { TypeOrmTransactions } from "./typeorm-transactions.entity";

@EntityRepository(TypeOrmTransactions)
export class TypeOrmTransactionsRepositoryAdapter
  extends Repository<TypeOrmTransactions>
  implements TransactionsRepository
{
  async createTransaction(transaction: Transactions) {
    const ormTransaction = new TypeOrmTransactions();

    Object.assign(ormTransaction, transaction);

    await this.save(ormTransaction);

    Object.assign(transaction, ormTransaction);

    return transaction;
  }

  async updateTransaction(transaction: Transactions) {
    const ormTransaction = new TypeOrmTransactions();

    Object.assign(ormTransaction, transaction);

    await this.save(ormTransaction);

    Object.assign(transaction, ormTransaction);

    return transaction;
  }

  async deleteTransaction(id: string) {
    const { affected } = await this.softDelete(id);

    return !!affected;
  }

  async searchTransaction(findOptions: FindOneOptions<TypeOrmTransactions>) {
    const transaction = await this.findOne(findOptions);

    if (!transaction) return undefined;

    return transaction;
  }

  async listTransactions(findOptions: FindManyOptions<TypeOrmTransactions>) {
    const transactions = await this.find(findOptions);

    if (!transactions) return [];

    return transactions;
  }
}
