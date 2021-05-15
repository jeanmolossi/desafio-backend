import { Module } from "@nestjs/common";
import { ConfigModule } from "@/config/config.module";
import { UserModule } from "@/user/user.module";
import { AuthModule } from "./auth/auth.module";
import { TransactionsModule } from "@/transactions/transactions.module";

@Module({
  imports: [ConfigModule, AuthModule, UserModule, TransactionsModule],
})
export class ApplicationModule {}
