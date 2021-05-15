import { v4 } from "uuid";
import { Coins } from "./types/Enums";
import { TransactionCreate } from "./types/transaction-create";

export class Transactions {
  id: string;
  received_value: number;
  received_coin: Coins;
  brl_received_value: number;
  convertion_value: number;

  constructor({
    id = v4(),
    received_coin,
    received_value,
    brl_received_value,
    convertion_value,
  }: TransactionCreate) {
    this.id = id;
    this.received_coin = received_coin;
    this.received_value = received_value;
    this.brl_received_value = brl_received_value;
    this.convertion_value = convertion_value;
  }
}
