import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import loginRoute from './login.js';

const router = Router();

router.get('/', authMiddleware, (req, res) => {
  res.render('home');
});

router.use('/login', loginRoute);

export default router;
