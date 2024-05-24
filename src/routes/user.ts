import { Router } from 'express';
import { getUser, loginUser, newUser } from '../controllers/user';

const router = Router();

router.post('/', newUser);
router.post('/login', loginUser)
router.get('/all', getUser)

export default router;