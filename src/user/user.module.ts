import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserService } from "./services";

@Module({
  controllers: [UserController],
  providers: [CreateUserService],
})
export class UserModule {}
