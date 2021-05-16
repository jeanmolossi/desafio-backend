import { CreateUserAdapter } from "@/user/adapters/CreateUserAdapter";
import { TypeOrmUserRepositoryAdapter } from "@/user/typeorm/typeorm-user.repository";
import { UserRepository } from "@/user/types/user.repository";
import { User } from "@/user/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(TypeOrmUserRepositoryAdapter)
    private readonly userRepository: UserRepository
  ) {}

  async execute(payload: CreateUserAdapter) {
    const entity_user = User.new(payload);

    const user = await this.userRepository.createUser(entity_user);

    return user;
  }
}
