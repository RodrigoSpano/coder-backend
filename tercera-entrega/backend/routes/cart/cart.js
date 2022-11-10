import { Router } from 'express';
import { delCart, getCart } from '../../controllers/cart/cart.controller.js';
import { authMiddleware } from '../../middleware/middlewares.js';

const router = Router();

router.get('/', authMiddleware, getCart);
router.get('/empty', authMiddleware, delCart);

export default router;
