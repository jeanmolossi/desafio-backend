import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Coins } from "../types/Enums";

@Entity("transactions")
export class TypeOrmTransactions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  received_value: number;

  @Column()
  received_coin: Coins;

  @Column()
  brl_received_value: number;

  @Column()
  convertion_value: number;

  @CreateDateColumn()
  created_at: Date;
}