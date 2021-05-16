import { ValidationPipe } from "@/application/validation.pipe";
import {
  Body,
  Controller,
  Delete,
  Inject,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateTransactionAdapter } from "./adapters/create-transaction-adapter";
import { UpdateTransactionAdapter } from "./adapters/update-transaction-adapter";
import { CreateTransactionService } from "./services/create/create-transaction.service";
import { DeleteTransactionService } from "./services/delete-transaction/delete-transaction.service";
import { UpdateTransactionService } from "./services/update-transaction/update-transaction.service";

@Controller("transactions")
export class TransactionsController {
  constructor(
    @Inject(CreateTransactionService)
    private readonly createTransactionService: CreateTransactionService,

    @Inject(UpdateTransactionService)
    private readonly updateTransactionService: UpdateTransactionService,

    @Inject(DeleteTransactionService)
    private readonly deleteTransactionService: DeleteTransactionService
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

  @Delete("/:id")
  async deleteTransaction(@Param("id") id: string) {
    return this.deleteTransactionService.execute(id);
  }
}
