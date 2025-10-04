import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string

    @Column({nullable:true})
    avatar?: string;

}
