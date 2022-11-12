import { Router } from 'express';
import { buyCart, delCart, getCart } from '../../controllers/cart/cart.controller.js';
import { authMiddleware } from '../../middleware/middlewares.js';

const router = Router();

router.get('/', authMiddleware, getCart);
router.get('/empty', authMiddleware, delCart);
router.get('/buy', buyCart)

export default router;
