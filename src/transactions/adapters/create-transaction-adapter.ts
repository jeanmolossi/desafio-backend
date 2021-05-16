import { Type } from "class-transformer";
import { IsEnum, IsNumber } from "class-validator";
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
}
