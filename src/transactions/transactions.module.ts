import { HttpModule, Module, Provider } from "@nestjs/common";
import { TransactionsController } from "./transactions.controller";
import { CreateTransactionService } from "./services/create/create-transaction.service";
import { TypeOrmTransactionsRepositoryAdapter } from "./typeorm/typeorm-transactions.repository";
import { Connection } from "typeorm";
import { UpdateTransactionService } from "./services/update-transaction/update-transaction.service";

const persistence_provider: Provider[] = [
  {
    provide: TypeOrmTransactionsRepositoryAdapter,
    inject: [Connection],
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(TypeOrmTransactionsRepositoryAdapter),
  },
];
@Module({
  controllers: [TransactionsController],
  imports: [
    HttpModule.register({
      baseURL: process.env.API_HOST,
    }),
  ],
  providers: [
    ...persistence_provider,
    CreateTransactionService,
    UpdateTransactionService,
  ],
})
export class TransactionsModule {}
