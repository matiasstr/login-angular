import { Router } from 'express';
import { register, login, getProfile } from '../controllers/user.controller';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getProfile);

export default router;
