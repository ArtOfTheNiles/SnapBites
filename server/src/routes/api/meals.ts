import { Router } from 'express';
import { Request, Response } from 'express';
import Meal from '../../models/Meal.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();


router.post('/', authenticateToken, async (req: Request, res: Response) => {
    try {
        const { image_url, name, weight_est, calories, carbohydrates, fats, proteins, time_eaten, favorite } = req.body;
        const userId = req.user.id;

        if (!name || !calories || !time_eaten) {
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }

        const newMeal = await Meal.create({
            image_url,
            name,
            weight_est,
            calories,
            carbohydrates,
            fats,
            proteins,
            time_eaten,
            favorite,
            profileId: userId
        });

        return res.status(201).json({ status: 'success', data: newMeal });
    } catch (error) {
        console.error('Error in POST /api/meals:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to add meal' });
    }
});

router.get('/', authenticateToken, async (req: Request, res: Response) => {
    try {
        console.log(' Received GET request for meals');
        console.log(' Authenticated user ID:', req.user.id);

        const userId = req.user.id;
        const meals = await Meal.findAll({
            where: { profileId: userId },
            attributes: [
                'id', 'name', 'image_url', 'weight_est', 'calories',
                'carbohydrates', 'fats', 'proteins', 'time_eaten', 'favorite'
            ],
            order: [['time_eaten', 'DESC']]
        });

        console.log(' Retrieved meals:', meals);
        
        return res.status(200).json({ status: 'success', data: meals });
    } catch (error) {
        console.error(' Error in GET /api/meals:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to retrieve meals' });
    }
});


export default router;
