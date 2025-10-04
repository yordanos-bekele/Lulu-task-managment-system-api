import { Req } from '@nestjs/common';
import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';
export class CreateUserDto {

    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6,{message: 'Minimium Password length is six'})
    password:string;
}
