import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  InternalServerErrorException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import authConstants from "./auth.constants";

@Injectable()
export class HttpAuth implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization)
      throw new ForbiddenException(
        "Você não tem autorização para acessar o recurso"
      );

    const token = request.headers.authorization.replace(/bearer\s*/i, "");

    try {
      this.jwtService.verify(token, { secret: authConstants.secret });
    } catch (error) {
      throw new InternalServerErrorException("Token inválido");
    }

    return true;
  }
}
