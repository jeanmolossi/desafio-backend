import { Injectable } from "@nestjs/common";
import { EntityRepository, FindOneOptions, Repository } from "typeorm";
import { UserRepository } from "../types/user.repository";
import { User } from "../user.entity";
import { TypeOrmUser } from "./typeorm-user.entity";

@Injectable()
@EntityRepository(TypeOrmUser)
export class TypeOrmUserRepositoryAdapter
  extends Repository<TypeOrmUser>
  implements UserRepository
{
  async createUser(user: User) {
    const ormUser = new TypeOrmUser();

    Object.assign(ormUser, user);

    await this.save(ormUser);

    Object.assign(user, ormUser);

    return user;
  }

  async findUser(options: FindOneOptions<TypeOrmUser>) {
    const ormUser = await this.findOne(options);

    if (!ormUser) return undefined;

    const user = new User(ormUser);

    return user;
  }
}
