import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from 'passport-jwt';
import { TokenPayloadDto } from "./dto/auth.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }
  async validate(payload: TokenPayloadDto): Promise<TokenPayloadDto> {
    return { id: payload.id, email: payload.email };
  }
}