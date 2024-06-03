import { Router } from 'express';
import { createCategory, deleteCategory, getCategory } from '../controllers/category';

const router = Router();

router.get('/all', getCategory);
router.delete('/all/:id', deleteCategory);
router.post('/create', createCategory);

export default router;
