import { resolve } from "path";
import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getTypeOrmModuleOptions = (): TypeOrmModuleOptions => ({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.POSTGRES_PORT || 5432),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [`${resolve(__dirname, "..")}/**/typeorm/*.entity.{ts,js}`],
  logging: true,
});

export const getTypeOrmMigrationOptions = (): TypeOrmModuleOptions => ({
  ...getTypeOrmModuleOptions(),
  entities: ["dist/**/typeorm/*.entity.js"],
  migrations: ["database/migrations/*.{ts,js}"],
  cli: {
    migrationsDir: "database/migrations",
  },
});

const TYPEORM_MODULE = TypeOrmModule.forRootAsync({
  useFactory: getTypeOrmModuleOptions,
});
@Module({
  imports: [TYPEORM_MODULE],
})
export class TypeOrmConfigModule {}
