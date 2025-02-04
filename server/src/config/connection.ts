import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';


dotenv.config();


const sequelize = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
});

const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connection established.');
    } catch (error) {
      console.error('Unable to connect:', error);
    }
  };
  
  testConnection();

export default sequelize;