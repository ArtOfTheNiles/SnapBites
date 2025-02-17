import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV?.toLowerCase() === 'production';

if (!process.env.DB_URL) {
    console.error('[connection.ts] DB_URL environment variable is not set!');
    throw new Error('DB_URL is required');
}

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: isProduction ? {
        ssl: true,
        keepAlive: true
    } : {
        ssl: false
    },
    logging: (msg) => console.log(`[Database] ${msg}`),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
        evict: 1000,
    },
    retry: {
        max: 3,
        match: [
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/
        ]
    }
});

export default sequelize;
