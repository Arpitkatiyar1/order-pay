import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserCredentialsDto, ValidatedUserDto } from "../user/dto/user.dto";

@Controller('api/v1/auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService,
    ) { }
    @Post('/login')
    async login(@Body() body: UserCredentialsDto): Promise<{ access_token: string }> {
        const user: ValidatedUserDto | null =
          await this.authService.validateUser(body);
        if (!user) throw new UnauthorizedException('Invalid Credentials');
        return await this.authService.login(user);
    }
}