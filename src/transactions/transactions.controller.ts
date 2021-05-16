import { ValidationPipe } from "@/application/validation.pipe";
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CreateTransactionAdapter } from "./adapters/create-transaction-adapter";
import { FilterTransactionAdapter } from "./adapters/filter-transaction-adapter";
import { UpdateTransactionAdapter } from "./adapters/update-transaction-adapter";
import {
  CreateTransactionService,
  DeleteTransactionService,
  SearchTransactionService,
  UpdateTransactionService,
} from "./services";

@Controller("transactions")
export class TransactionsController {
  constructor(
    @Inject(CreateTransactionService)
    private readonly createTransactionService: CreateTransactionService,

    @Inject(UpdateTransactionService)
    private readonly updateTransactionService: UpdateTransactionService,

    @Inject(DeleteTransactionService)
    private readonly deleteTransactionService: DeleteTransactionService,

    @Inject(SearchTransactionService)
    private readonly searchTransactionService: SearchTransactionService
  ) {}

  @Get()
  async searchTransaction(
    @Query(ValidationPipe) filters: FilterTransactionAdapter
  ) {
    return this.searchTransactionService.execute(filters);
  }

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
