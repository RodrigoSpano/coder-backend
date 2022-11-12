import { Router } from 'express';
import { authMiddleware } from '../middleware/middlewares.js';
import loginRoute from './session/login.js'
import signupRoute from './session/singup.js'
import logoutRoute from './session/logout.js'
import { getHome } from '../controllers/home.controller.js';
import addCartRoute from './cart/addCart.js'
import cartRoute from './cart/cart.js'
import categoryRoute from './categories/categories.js'
import profileRoute from './profile/profile.js';

const router = Router()

router.use('/auth/login', loginRoute)
router.use('/auth/signup', signupRoute)
router.use('/auth/logout', logoutRoute)
router.use('/addcart', addCartRoute)
router.use('/cart', cartRoute)
router.use('/category', categoryRoute)
router.use('/account', profileRoute)
router.get('/', authMiddleware, getHome)

export default router;