import { TypeOrmTransactionsRepositoryAdapter } from "@/transactions/typeorm/typeorm-transactions.repository";
import { TransactionsRepository } from "@/transactions/types/transactions.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DeleteTransactionService {
  constructor(
    @InjectRepository(TypeOrmTransactionsRepositoryAdapter)
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute(id: string) {
    const wasDeleted = await this.transactionsRepository.deleteTransaction(id);

    return wasDeleted;
  }
}
