import { Module } from "@nestjs/common";
import { TransactionsController } from "./transactions.controller";
import { CreateService } from "./services/create/create.service";

@Module({
  controllers: [TransactionsController],
  providers: [CreateService],
})
export class TransactionsModule {}
