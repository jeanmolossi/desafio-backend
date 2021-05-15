import { ConfigModule } from "@/config/config.module";
import { UserModule } from "@/user/user.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [ConfigModule, UserModule],
})
export class ApplicationModule {}
