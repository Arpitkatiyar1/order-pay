import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { CreateUserResponse } from './interface/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}
  async createUser(body: CreateUserDto): Promise<CreateUserResponse> {
    const { firstName, lastName, password,email, contact } = body;

    if (!firstName || !lastName || !email || !contact || !password)
      throw new BadRequestException('Missing required user fields');

    return await this.userRepo.createUser(body);
  }
}
