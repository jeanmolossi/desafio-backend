import { Controller, Post } from "@nestjs/common";

@Controller("user")
export class UserController {
  @Post()
  async createUser() {
    return "USER CRIADO!";
  }
}
