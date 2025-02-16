import express, { Application } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/api/auth.js';
import mealRoutes from './routes/api/meals.js';
import sequelize from './config/connection.js';
import profileRoutes from './routes/api/profile.js';

dotenv.config(); 

const app: Application = express();
const PORT = Number.parseInt(process.env.PORT || '3001');

app.use(express.json());

// Extraneous logs
console.log('Environment:', process.env.NODE_ENV);
console.log('Port configuration:', {
    envPort: process.env.PORT,
    finalPort: PORT
});

app.use('/api/auth', authRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/profile', profileRoutes);


function logRegisteredRoutes(app: Application): void {
    if (app._router && app._router.stack) {
        app._router.stack.forEach((r: any) => {  
            if (r.route && r.route.path) {
                console.log(`[server.ts] Registered route: ${r.route.path}`);
            }
        });
    }
}

sequelize.authenticate()
.then(() => {
    console.log('[server.ts] Database connection established successfully.');
    sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT)
            .on('error', (error) => {
                console.error('[server.ts] Server failed to start:', error);
                process.exit(1);
            })
            .on('listening', () => {
                console.log(`[server.ts] Server running on port ${PORT}`);
                logRegisteredRoutes(app);
            });
    })
}).catch((err: unknown) => {
    console.error('[server.ts] Database sync failed:', err);
    process.exit(1);
});


process.on('uncaughtException', (err) => {
    console.error('[server.ts] Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
    console.error('[server.ts] Unhandled Rejection:', err);
});