import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    database: process.env.DB_NAME || 'snapbites',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // for Render's SSL connection
        }
    },
    logging: (msg) => console.log(`[Database] ${msg}`),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

async function initializeDatabase(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log(' Connection to database successful');
    } catch (error: unknown) {
        console.error(' Database connection failed:', error);
    }
}

initializeDatabase();

export default sequelize;
