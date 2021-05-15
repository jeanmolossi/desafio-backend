import { Injectable } from "@nestjs/common";
import { EntityRepository, FindOneOptions, Repository } from "typeorm";
import { User } from "../user.entity";
import { TypeOrmUser } from "./typeorm-user.entity";

@Injectable()
@EntityRepository(TypeOrmUser)
export class TypeOrmUserRepositoryAdapter extends Repository<TypeOrmUser> {
  async createUser(user: User) {
    const ormUser = new TypeOrmUser();

    Object.assign(ormUser, user);

    await this.save(ormUser);

    return ormUser;
  }

  async findUser(options: FindOneOptions<TypeOrmUser>) {
    const ormUser = await this.findOne(options);

    if (!ormUser) return undefined;

    const user = new User(ormUser);

    return user;
  }
}
