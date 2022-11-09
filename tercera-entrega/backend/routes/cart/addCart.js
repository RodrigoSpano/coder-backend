import {Router} from 'express' 
import { getAddCart, postAddCart } from '../../controllers/cart/addCart.controller.js';

const router = Router()

// router.get('/', getAddCart)
router.post('/', postAddCart)

export default router;