import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUserTable1621048447292 implements MigrationInterface {
  private users_table = new Table({
    name: "users",
    columns: [
      {
        type: "uuid",
        name: "id",
        isNullable: false,
        isPrimary: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()",
      },
      {
        name: "username",
        type: "varchar",
        isNullable: false,
      },
      {
        name: "password",
        type: "varchar",
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.createTable(this.users_table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.users_table);
  }
}
