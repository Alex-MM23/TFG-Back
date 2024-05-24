import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/product';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken, getProducts)
router.post('/create', createProduct)

export default router;