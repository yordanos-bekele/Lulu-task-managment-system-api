import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {

    @Post('signup')
    async signUp(@Body() userInfo: CreateUserDto){

    }
}
