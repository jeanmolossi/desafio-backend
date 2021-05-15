import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class TypeOrmUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
