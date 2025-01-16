import { Router } from 'express';
import { loginCrontroller } from '../services/controllers/auth.controller';

const router = Router();

router.post('/login', loginCrontroller);

export default router; 