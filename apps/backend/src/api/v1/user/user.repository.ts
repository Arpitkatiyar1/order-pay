import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserResponse } from "./interface/user.interface";
import { CreateUserDto } from "./dto/user.dto";
import { BadRequestException } from "@nestjs/common";

export class UserRepository{
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
    ) { }
    
    async createUser(body: CreateUserDto): Promise<CreateUserResponse>{
        const user: User = new User();
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.password = body.password;
        user.email = body.email;
        user.contact = body.contact;
        user.created_by = 'user';
        const exist: User|null = await this.userRepo.findOneBy({ email:user.email });
        if (exist) throw new BadRequestException('User already exist with this email');
        await this.userRepo.save(user);
        return { sc: 201, message: 'user created successfully' };
    }
}