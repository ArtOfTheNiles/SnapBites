import express, { Application } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/api/auth.js';
import mealRoutes from './routes/api/meals.js';
import sequelize from './config/connection.js';

dotenv.config(); 

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/meals', mealRoutes);


app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(` Registered route: ${r.route.path}`);
    }
});


sequelize.sync({ alter: true }).then(() => {  
    app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`);
    });
}).catch((err: unknown) => {
    console.error(' Database sync failed:', err);
});


process.on('uncaughtException', (err) => {
    console.error(' Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
    console.error(' Unhandled Rejection:', err);
});


app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
      console.log(` Registered route: ${r.route.path}`);
  }
});