import { Module } from "@nestjs/common";
import { TransactionsController } from "./transactions.controller";
import { CreateTransactionService } from "./services/create/create-transaction.service";

@Module({
  controllers: [TransactionsController],
  providers: [CreateTransactionService],
})
export class TransactionsModule {}
