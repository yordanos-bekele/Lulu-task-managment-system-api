import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {config} from 'dotenv';
import { User } from 'src/user/entities/user.entity';

config();
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME || 'etech',
  password: process.env.DB_PASSWORD || 'etech',
  database: process.env.DB_NAME || 'simple_ecommerce',
  entities: [User],
  migrations: [__dirname + "/database/migrations/*{.js,.ts}"],
  synchronize: false, 
});