import { Module, Provider } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserService } from "./services";
import { TypeOrmUserRepositoryAdapter } from "./typeorm/typeorm-user.repository";
import { Connection } from "typeorm";

const persistence_provider: Provider[] = [
  {
    provide: TypeOrmUserRepositoryAdapter,
    inject: [Connection],
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(TypeOrmUserRepositoryAdapter),
  },
];

@Module({
  controllers: [UserController],
  providers: [...persistence_provider, CreateUserService],
})
export class UserModule {}
