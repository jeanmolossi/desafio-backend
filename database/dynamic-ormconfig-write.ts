import { getTypeOrmMigrationOptions } from "@/config/typeorm.module";
import { PathLike, unlinkSync, writeFileSync } from "fs";
import { join } from "path";

const TypeOrmConfigFilePath: PathLike = join(__dirname, "../ormconfig.json");
const TypeOrmMigrationOptions = getTypeOrmMigrationOptions();

try {
  unlinkSync(TypeOrmConfigFilePath);
} catch (e) {
  console.log("Falha ao deletar ormconfig.json");
}

writeFileSync(
  TypeOrmConfigFilePath,
  JSON.stringify([TypeOrmMigrationOptions], null, 2)
);
