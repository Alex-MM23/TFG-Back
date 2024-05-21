import { Router } from 'express';
import { createOrder } from '../controllers/order';

const router = Router();

// Ruta para crear una nueva orden
router.post('/orders', createOrder);

export default router;
