import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserApisResponseDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async createUser(body: CreateUserDto): Promise<UserApisResponseDto> {
    const { firstName, lastName, password, email, contact } = body;

    if (!firstName || !lastName || !email || !contact || !password)
      throw new BadRequestException('Missing required user fields');

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const result=await this.userRepo.createUser({
      ...body,
      password: hashedPassword,
    });

    return { status: 201, message: 'user created successfully' };
  }
}
