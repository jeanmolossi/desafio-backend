import { CreateTransactionAdapter } from "@/transactions/adapters/create-transaction-adapter";
import { Transactions } from "@/transactions/transactions.entity";
import { TypeOrmTransactionsRepositoryAdapter } from "@/transactions/typeorm/typeorm-transactions.repository";
import { TransactionsRepository } from "@/transactions/types/transactions.repository";
import { BadRequestException, HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Coins } from "@/transactions/types/Enums";
import { firstValueFrom } from "rxjs";
import { Quotation } from "@/transactions/types/api-quotation-response";

@Injectable()
export class CreateTransactionService {
  constructor(
    @InjectRepository(TypeOrmTransactionsRepositoryAdapter)
    private readonly transactionsRepository: TransactionsRepository,

    private readonly httpClient: HttpService
  ) {}

  async execute(payload: CreateTransactionAdapter) {
    const last_transaction =
      await this.transactionsRepository.searchTransaction({
        order: { created_at: "DESC" },
      });

    console.log(last_transaction);

    if (
      last_transaction?.received_coin === payload.received_coin &&
      last_transaction.received_value === payload.received_value
    ) {
      if (!payload.confirm_duplicate_transaction) {
        throw new BadRequestException(
          "Você deve enviar uma confirmação em caso de transações duplicadas"
        );
      }
    }

    const quotation = this.httpClient.request<Quotation[]>({
      method: "GET",
      url: `/${payload.received_coin}-${Coins.BRL}/1`,
    });

    const {
      data: [quotation_result],
    } = await firstValueFrom(quotation);

    const { low } = quotation_result;

    const brl_received_value = payload.received_value * +low;

    const transaction = new Transactions({
      ...payload,
      brl_received_value: brl_received_value,
      convertion_value: +low,
    });

    const newTransaction = await this.transactionsRepository.createTransaction(
      transaction
    );

    return newTransaction;
  }
}
