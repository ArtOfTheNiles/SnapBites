import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV?.toLowerCase() === 'production';

const sequelize = new Sequelize(process.env.DB_URL || '', {
    dialect: 'postgres',
    dialectOptions: isProduction ? {
        ssl: {
            require: true,
            rejectUnauthorized: false // for Render's SSL connection
        }
    } : {},
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
        console.log('[connection.ts] Connection to database successful');
    } catch (error: unknown) {
        console.error('[connection.ts] Database connection failed:', error);
    }
}

initializeDatabase();

export default sequelize;
