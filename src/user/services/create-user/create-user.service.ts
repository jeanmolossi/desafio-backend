import { CreateUserAdapter } from "@/user/adapters/CreateUserAdapter";
import { TypeOrmUser } from "@/user/typeorm/typeorm-user.entity";
import { User } from "@/user/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateUserService {
  async execute(payload: CreateUserAdapter) {
    const user = new TypeOrmUser();

    const entity_user = User.new(payload);

    Object.assign(user, entity_user);

    return user;
  }
}
