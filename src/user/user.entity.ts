import { hashSync, compareSync } from "bcryptjs";
import { v4 } from "uuid";
import { CreateUser } from "./types/user-create";

export class User {
  id: string;
  username: string;
  password: string;

  constructor({ id = v4(), username, password }: CreateUser) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  static new(payload: CreateUser) {
    const user = new User(payload);

    user.hashPassword();

    return user;
  }

  hashPassword(): void {
    const hashed_password = hashSync(this.password, 6);

    this.password = hashed_password;
  }

  checkPassword(input_password: string): boolean {
    return compareSync(input_password, this.password);
  }
}
