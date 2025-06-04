import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async createUser(body: CreateUserDto) {
    const exist: User | null = await this.userRepo.findOneBy({
      email: body.email,
    });
    if (exist)
      throw new BadRequestException('User already exist with this email');
    const user = this.userRepo.create({ ...body, created_by: 'user' });
    this.userRepo.save(user);
  }
  async getUser(email: string): Promise<User | null> {
    return await this.userRepo.findOne({ where: { email } });
  }
}
