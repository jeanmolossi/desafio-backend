import { ValidationPipe } from "@/application/validation.pipe";
import { Body, Controller, Inject, Param, Post, Put } from "@nestjs/common";
import { CreateTransactionAdapter } from "./adapters/create-transaction-adapter";
import { UpdateTransactionAdapter } from "./adapters/update-transaction-adapter";
import { CreateTransactionService } from "./services/create/create-transaction.service";
import { UpdateTransactionService } from "./services/update-transaction/update-transaction.service";

@Controller("transactions")
export class TransactionsController {
  constructor(
    @Inject(CreateTransactionService)
    private readonly createTransactionService: CreateTransactionService,

    @Inject(UpdateTransactionService)
    private readonly updateTransactionService: UpdateTransactionService
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

  @Put("/:id")
  async updateTransaction(
    @Param("id") transaction_id: string,
    @Body(ValidationPipe) updateTransactionPayload: UpdateTransactionAdapter
  ) {
    const transaction = await this.updateTransactionService.execute({
      ...updateTransactionPayload,
      id: transaction_id,
    });

    return transaction;
  }
}
