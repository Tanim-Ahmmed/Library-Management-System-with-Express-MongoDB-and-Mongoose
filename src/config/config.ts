import dotenv from 'dotenv';
import path from 'path';

// env variables from .env file
dotenv.config({ path: path.resolve(process.cwd(),'.env') });


export default{
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  PORT: process.env.PORT,
}