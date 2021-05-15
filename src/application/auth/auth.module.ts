import { UserModule } from "@/user/user.module";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import Constants from "./auth.constants";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: Constants.secret,
      signOptions: {
        expiresIn: Constants.expiresIn,
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
