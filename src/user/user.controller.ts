import { ValidationPipe } from "@/application/validation.pipe";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserAdapter } from "./adapters/CreateUserAdapter";

@Controller("user")
export class UserController {
  @Post()
  async createUser(@Body(ValidationPipe) createUserPayload: CreateUserAdapter) {
    return createUserPayload;
  }
}
