import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTransactionsTable1621130264149
  implements MigrationInterface
{
  private transactions_table = new Table({
    name: "transactions",
    columns: [
      {
        name: "id",
        type: "uuid",
        isNullable: true,
        isPrimary: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()",
      },
      {
        name: "received_value",
        type: "decimal",
        precision: 10,
        scale: 3,
        isNullable: true,
      },
      {
        name: "received_coin",
        type: "varchar",
        isNullable: true,
      },
      {
        name: "brl_received_value",
        type: "decimal",
        precision: 10,
        scale: 3,
        isNullable: true,
      },
      {
        name: "convertion_value",
        type: "decimal",
        precision: 10,
        scale: 3,
        isNullable: true,
      },
      {
        name: "created_at",
        type: "timestamp with time zone",
        isNullable: true,
        default: "now()",
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.transactions_table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.transactions_table);
  }
}
