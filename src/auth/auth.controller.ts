import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){

    }

    @Post('signup')
    async signUp(@Body() userInfo: CreateUserDto){
        return this.authService.signUp(userInfo)
    }
}
