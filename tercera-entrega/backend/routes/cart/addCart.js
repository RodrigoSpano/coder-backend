import {Router} from 'express' 
import { getAddCart, postAddCart } from '../../controllers/cart/cart.controller.js';
import { cartProdExistsMiddleware } from '../../middleware/middlewares.js';

const router = Router()

// router.get('/', getAddCart)
router.post('/', cartProdExistsMiddleware, postAddCart);

export default router;