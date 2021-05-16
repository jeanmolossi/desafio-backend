import { HttpModule, Module, Provider } from "@nestjs/common";
import { TransactionsController } from "./transactions.controller";
import { CreateTransactionService } from "./services/create/create-transaction.service";
import { TypeOrmTransactionsRepositoryAdapter } from "./typeorm/typeorm-transactions.repository";
import { Connection } from "typeorm";
import { UpdateTransactionService } from "./services/update-transaction/update-transaction.service";
import { DeleteTransactionService } from './services/delete-transaction/delete-transaction.service';
import { SearchTransactionService } from './services/search-transaction/search-transaction.service';
import { ListTransactionService } from './services/list-transaction/list-transaction.service';

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
    DeleteTransactionService,
    SearchTransactionService,
    ListTransactionService,
  ],
})
export class TransactionsModule {}
