import express, { Application } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import colors from 'colors';
import dotenv from 'dotenv';

import authRoutes from './routes/api/auth.js';
import mealRoutes from './routes/api/meals.js';
import sequelize from './config/connection.js';
import profileRoutes from './routes/api/profile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); 

const app: Application = express();
const PORT = Number.parseInt(process.env.PORT || '3001');

app.use(express.json());

// // Extraneous logs
const locator = [
    colors.blue('[SnapBites]'),
    colors.cyan('[server.ts]'),
].join('');

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/api/auth', authRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/profile', profileRoutes);


function logRegisteredRoutes(app: Application): void {
    if (app._router && app._router.stack) {
        app._router.stack.forEach((r: any) => {  
            if (r.route && r.route.path) {
                console.log(`${locator} Registered route: ${r.route.path}`);
            }
        });
    }
}

async function connectSequence(maxRetries = 5, delay = 10000): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
        try {
            await sequelize.authenticate();
            console.log(`${locator} Database connection established successfully.`);
            return;
        } catch (error) {
            console.error(`${locator} Database connection attempt ${i + 1} failed:`, error);
            if (i < maxRetries - 1) {
                console.log(`${locator} Retrying in ${delay / 1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    throw new Error(`${locator} Failed to connect to the database after multiple attempts! :sadface:`);
}

connectSequence()
.then(() => {
    console.log(`${locator} Database connection established successfully.`);
    sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, '0.0.0.0')
            .on('error', (error) => {
                console.error(`${locator} Server failed to start:`, error);
                process.exit(1);
            })
            .on('listening', () => {
                console.log(`${locator} Server running on port ${PORT}`);
                logRegisteredRoutes(app);
            });
    })
}).catch((err: unknown) => {
    console.error(`${locator} Database sync failed:`, err);
    process.exit(1);
});


process.on('uncaughtException', (err) => {
    console.error(`${locator} Uncaught Exception:`, err);
});

process.on('unhandledRejection', (err) => {
    console.error(`${locator} Unhandled Rejection:`, err);
});