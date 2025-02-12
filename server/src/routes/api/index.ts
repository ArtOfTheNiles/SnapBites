import { Router } from 'express';
import mealRoutes from './meals.js';

const router = Router();
router.use('/meal', mealRoutes);


export default router;
