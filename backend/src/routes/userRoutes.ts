import { Router } from 'express';
import { register, login, getProfile } from '../controllers/user.controller';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();


router.get('/api', (_req, res) => {
    console.log('🟢 API GET / llamada');
    res.send('API funcionando');
  });
router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getProfile);

export default router;
