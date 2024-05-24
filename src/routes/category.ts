import { Router } from 'express';
import { createCategory, getCategory } from '../controllers/category';

const router = Router();

router.get('/all', getCategory);
router.post('/create', createCategory);

export default router;
