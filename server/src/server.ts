import express, { Application } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/api/auth.js';
import mealRoutes from './routes/api/meals.js';
import sequelize from './config/connection.js';
import profileRoutes from './routes/api/profile.js';

dotenv.config(); 

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/profile', profileRoutes);


function logRegisteredRoutes(app: Application): void {
    if (app._router && app._router.stack) {
        app._router.stack.forEach((r: any) => {  
            if (r.route && r.route.path) {
                console.log(` Registered route: ${r.route.path}`);
            }
        });
    }
}

sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(` Server running on port ${PORT}`);
            logRegisteredRoutes(app);
        });
    })
    .catch((err: unknown) => {
        console.error(' Database sync failed:', err);
    });


process.on('uncaughtException', (err) => {
    console.error(' Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
    console.error(' Unhandled Rejection:', err);
});