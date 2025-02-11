import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Profile from '../../models/Profile.js';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
    try {
        console.log(" Received login request:", req.body); 

        const { username, password } = req.body;

        if (!username || !password) {
            console.error(' Missing username or password:', req.body);
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        const user = await Profile.findOne({ where: { username } });

        if (!user) {
            console.error(` User not found in database: ${username}`);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log(" Found user in database:", user.username); 

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            console.error(` Incorrect password for user: ${username}`);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log(" Password is correct, generating token..."); 

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error: unknown) {
        console.error(' Error in /api/auth/login:', error);
        res.status(500).json({ message: 'Server error', error: (error as Error).message });
    }
});



export default router;
