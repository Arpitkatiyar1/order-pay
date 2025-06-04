import { Body, Controller, Inject, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { UserApisResponseDto } from './dto/user.dto';
import { BadRequestException } from '@nestjs/common';

@ApiTags('user module')
// @UseGuards(AuthGuard('userAuth'))
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async createUser(
    @Body() body: CreateUserDto,
    @Req() req: Request,
  ): Promise<UserApisResponseDto> {
    return await this.userService.createUser(body);
  }
}
