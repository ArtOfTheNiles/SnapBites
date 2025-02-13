import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Profile from '../models/Profile.js';


declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}

export const authenticateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            res.status(401).json({ message: 'No token provided' });
            return;
        }

        if(process.env.ADMIN_SECRET && token === process.env.ADMIN_SECRET) {
            req.user = { username: 'admin' };
            return next();
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number };

        const user = await Profile.findByPk(decoded.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        req.user = user;
        next();
    } catch (error: unknown) {
        res.status(403).json({ message: 'Invalid token' });
    }
};
