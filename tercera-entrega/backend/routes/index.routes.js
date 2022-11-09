import { Router } from 'express';
import { authMiddleware } from '../middleware/middlewares.js';
import loginRoute from './session/login.js'
import signupRoute from './session/singup.js'
import logoutRoute from './session/logout.js'

const router = Router()

router.use('/auth/login', loginRoute)
router.use('/auth/signup', signupRoute)
router.use('/auth/logout', logoutRoute)
router.get('/', authMiddleware)

export default router;