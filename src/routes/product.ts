import { Router } from 'express';
import { createProduct, getProductByCategory, getProducts } from '../controllers/product';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken, getProducts)
router.post('/create', createProduct)
router.get('/products/category/:categoryId', getProductByCategory);

export default router;