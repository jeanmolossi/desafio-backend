import { Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNumber, IsOptional } from "class-validator";
import { Coins } from "../types/Enums";

export class CreateTransactionAdapter {
  @IsEnum(Coins, { message: "O tipo da moeda deve ser um valor" })
  received_coin: Coins;

  @IsNumber(
    { maxDecimalPlaces: 3, allowNaN: false, allowInfinity: false },
    { message: "O valor em reais recebido deve ser um número" }
  )
  @Type(() => Number)
  received_value: number;

  @IsBoolean({ message: "Você deve confirmar com um valor booleano" })
  @IsOptional()
  confirm_duplicate_transaction?: boolean;
}
