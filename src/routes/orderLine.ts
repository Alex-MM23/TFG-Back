import { Router } from 'express';
import { getOrdeline } from '../controllers/orderLine';

const router = Router();

router.get('/all', getOrdeline)

export default router;