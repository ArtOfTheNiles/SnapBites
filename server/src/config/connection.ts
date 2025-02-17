import { Sequelize } from 'sequelize';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV?.toLowerCase() === 'production';

if (!process.env.DB_URL) {
    console.error('[connection.ts] DB_URL environment variable is not set!');
    throw new Error('DB_URL is required');
}

const processTag = [
    colors.cyan('>>-['),
    colors.underline(colors.white('Snap')),
    colors.underline(colors.cyan('Bites')),
    colors.white(']:'),
    colors.blue('['),
    colors.cyan.underline('Sequelize'),
    colors.blue(']-->'),
].join('');

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: isProduction ? {
        ssl: {
            require: true,
            rejectUnauthorized: false
        },
        keepAlive: true
    } : {
        ssl: false
    },
    logging: (msg) => console.log(`${processTag} ${msg}`),
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
