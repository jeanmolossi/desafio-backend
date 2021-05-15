import { ValidationPipe } from "@/application/validation.pipe";
import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateUserAdapter } from "./adapters/CreateUserAdapter";
import { CreateUserService } from "./services";

@Controller("user")
export class UserController {
  constructor(
    @Inject(CreateUserService)
    private readonly createUserService: CreateUserService
  ) {}

  @Post()
  async createUser(@Body(ValidationPipe) createUserPayload: CreateUserAdapter) {
    const created_user = await this.createUserService.execute(
      createUserPayload
    );

    return created_user;
  }
}
