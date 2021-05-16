import { ValidationPipe } from "@/application/validation.pipe";
import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateTransactionAdapter } from "./adapters/create-transaction-adapter";
import { CreateTransactionService } from "./services/create/create-transaction.service";

@Controller("transactions")
export class TransactionsController {
  constructor(
    @Inject(CreateTransactionService)
    private readonly createTransactionService: CreateTransactionService
  ) {}

  @Post()
  async createTransaction(
    @Body(ValidationPipe) createTransactionPayload: CreateTransactionAdapter
  ) {
    const transaction = await this.createTransactionService.execute(
      createTransactionPayload
    );

    return transaction;
  }
}
