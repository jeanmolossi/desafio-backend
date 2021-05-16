import { Type } from "class-transformer";
import { IsEnum, IsNumberString } from "class-validator";
import { Coins } from "../types/Enums";

export class CreateTransactionAdapter {
  @IsNumberString()
  @Type(() => Number)
  brl_received_value: number;

  @IsNumberString()
  @Type(() => Number)
  convertion_value: number;

  @IsEnum(Coins)
  received_coin: Coins;

  @IsNumberString()
  @Type(() => Number)
  received_value: number;
}
