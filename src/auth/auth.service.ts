import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
    
    async signUp(userInfo:CreateUserDto){

        //find if the user exitsts 
        const existedUser = await this.userRepository.findBy({email: userInfo.email})
        if (existedUser){
            throw new HttpException('User already exits with the email',HttpStatus.BAD_REQUEST)
        }
        const hashedPwd = await this.hashPassword(userInfo.password)
        const newUser = this.userRepository.create({
            name: userInfo.name,
            email: userInfo.email, 
            password: hashedPwd
        })

        return (await this.userRepository.save(newUser)).id

    }

    hashPassword = async (pwd:string)=>{
        const hash = await bcrypt.hashPassword(pwd,Number(process.env.SALT_ROUNDS));
        return hash;
    }
    verifyPassword = async (pwd:string, hashedPwd:string)=>{
        return await bcrypt.compare(pwd, hashedPwd)
    }
}
