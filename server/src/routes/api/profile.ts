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

        if (!username || !password) {
            return res.status(400).json({ status: 'error', message: 'Please enter all fields' });
        }











    }






});
