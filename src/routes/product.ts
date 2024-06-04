import { Router } from 'express';
import { createProduct, deleteProduct, getProducts, getProductsByCategory } from '../controllers/product';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken, getProducts)
router.post('/create', createProduct)
router.get('/products', validateToken, getProductsByCategory);
router.delete('/:id', validateToken, deleteProduct);

export default router;