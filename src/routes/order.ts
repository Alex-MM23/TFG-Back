import { Router } from 'express';
import { createOrder, getOrder } from '../controllers/order';

const router = Router();

router.post('/', createOrder);
router.get('/all', getOrder)

export default router;
