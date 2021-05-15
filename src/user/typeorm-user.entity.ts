import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class TypeOrmUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
