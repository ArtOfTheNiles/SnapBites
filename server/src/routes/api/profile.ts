import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Profile from '../../models/Profile.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();


router.get('/', authenticateToken, async (req: Request, res: Response) => {
    try {
        const profile = await Profile.findAll({
            attributes: ['id', 'username'],
        });
        

        return res.status(200).json({
            success: true,
            data: profile,
        });
    } catch (error) {
        console.error('Error in GET /api/profile', error);
        return res.status(500).json({ status: 'error', message: 'Server error' });
    }
});


router.post('/', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const existingUser = await Profile.findOne({ where: { username } });

        if (existingUser) {
            return res.status(400).json({ status: 'error', message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Profile.create({
            username,
            password: hashedPassword
        });

        return res.status(201).json({ status: 'success', data: newUser });
    } catch (error) {
        console.error('Error in POST /api/profile:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to create profile' });
    }
});

    export default router;

