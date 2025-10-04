import {IsEmail, IsString, MinLength} from 'class-validator';
export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6,{message: 'Minimium Password length is six'})
    password:string;
}
