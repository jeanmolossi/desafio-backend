import { IsEnum, IsOptional, IsUUID } from "class-validator";
import { Coins } from "../types/Enums";

export class FilterTransactionAdapter {
  @IsUUID(4, { message: "O hash identificador da transação deve ser válido" })
  @IsOptional()
  id?: string;

  @IsEnum(Coins, { message: "O tipo da moeda deve ser um valor" })
  @IsOptional()
  received_coin?: Coins;
}
