import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';


dotenv.config();

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASS) {
    throw new Error('Please define the DB_NAME, DB_USER, and DB_PASS environment variables');
}


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
    }
);



export default sequelize;