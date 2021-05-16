import { Coins } from "./Enums";

export interface Quotation {
  code: Coins;
  codein: Coins;
  name: string;
  high: string;
  low: string;
  create_date: string;
}
