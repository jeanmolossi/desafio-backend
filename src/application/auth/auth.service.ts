import { TypeOrmUserRepositoryAdapter } from "@/user/typeorm/typeorm-user.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(TypeOrmUserRepositoryAdapter)
    private readonly userRepository: TypeOrmUserRepositoryAdapter,

    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userRepository.findUser({
      where: { username },
    });

    if (user && user.checkPassword(pass)) {
      Object.assign(user, { password: undefined });
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
