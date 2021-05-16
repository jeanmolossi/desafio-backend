import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, IsUUID } from "class-validator";
import { Coins } from "../types/Enums";

export class UpdateTransactionAdapter {
  @IsUUID(4, { message: "O hash identificador da transação deve ser válido" })
  @IsOptional()
  id: string;

  @IsNumber(
    { maxDecimalPlaces: 3, allowNaN: false, allowInfinity: false },
    { message: "O valor em reais recebido deve ser um número" }
  )
  @Type(() => Number)
  @IsOptional()
  received_value: number;

  @IsEnum(Coins, { message: "O tipo da moeda deve ser um valor" })
  @IsOptional()
  received_coin: Coins;

  @IsNumber(
    { maxDecimalPlaces: 3, allowNaN: false, allowInfinity: false },
    { message: "O valor em reais recebido deve ser um número" }
  )
  @Type(() => Number)
  @IsOptional()
  brl_received_value: number;

  @IsNumber(
    { maxDecimalPlaces: 3, allowNaN: false, allowInfinity: false },
    { message: "O valor em reais recebido deve ser um número" }
  )
  @Type(() => Number)
  @IsOptional()
  convertion_value: number;
}
