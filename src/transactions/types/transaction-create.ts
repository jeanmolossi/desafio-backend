import { Coins } from "./Enums";

export interface TransactionCreate {
  id?: string;
  received_value: number;
  received_coin: Coins;
  brl_received_value: number;
  convertion_value: number;
}
