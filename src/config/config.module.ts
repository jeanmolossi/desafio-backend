import { Module } from "@nestjs/common";
import { TypeOrmConfigModule } from "./typeorm.module";

@Module({
  imports: [TypeOrmConfigModule],
})
export class ConfigModule {}
