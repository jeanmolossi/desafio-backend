import { IsString, IsNotEmpty } from "class-validator";

export class CreateUserAdapter {
  @IsString({ message: "O username deve ser um texto váido" })
  @IsNotEmpty({ message: "O username não pode estar vazio" })
  username: string;

  @IsString({ message: "A password deve ser um texto váido" })
  @IsNotEmpty({ message: "A password não pode estar vazia" })
  password: string;
}
