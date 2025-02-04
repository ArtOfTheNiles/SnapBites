import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME || 'snapbites',
  logging: false, 
});


const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    console.log('Connected to database:', process.env.DB_NAME || 'snapbites');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    console.log('Check that PostgreSQL is running and the database exists');
  }
};

testConnection();

export default sequelize;