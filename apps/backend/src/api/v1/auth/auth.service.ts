import * as bcrypt from 'bcryptjs';
import { UserCredentialsDto, ValidatedUserDto } from '../user/dto/user.dto';
import { User } from '../user/entity/user.entity';
import { UserRepository } from '../user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadDto } from './dto/auth.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    userCredentials: UserCredentialsDto,
  ): Promise<ValidatedUserDto | null> {
    try {
      const user: User | null = await this.userRepo.getUser(
        userCredentials.email,
      );
      if (
        user &&
        (await bcrypt.compare(userCredentials.password, user.password))
      ) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
  async login(user: ValidatedUserDto): Promise<{ access_token: string }> {
    const payload: TokenPayloadDto = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
