import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
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
}
