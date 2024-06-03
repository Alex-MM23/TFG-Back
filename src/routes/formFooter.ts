import { Router } from 'express';
import { createForm } from '../controllers/formFooter';

const router = Router();

router.post('/', createForm);

export default router;