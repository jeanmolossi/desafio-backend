import { FindOneOptions } from "typeorm";
import { User } from "../user.entity";

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findUser(findOptions: FindOneOptions): Promise<User | undefined>;
}
