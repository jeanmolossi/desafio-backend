import { Module } from "@nestjs/common";
import { ConfigModule } from "@/config/config.module";
import { UserModule } from "@/user/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [ConfigModule, AuthModule, UserModule],
})
export class ApplicationModule {}
