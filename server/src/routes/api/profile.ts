import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Profile from '../../models/Profile.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();


router.get('/', authenticateToken, async (req: Request, res: Response) => {
    try {




        
    }