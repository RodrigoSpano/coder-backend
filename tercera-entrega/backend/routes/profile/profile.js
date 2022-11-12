import {Router} from 'express' 
import { getProfile } from '../../controllers/profile.controllers.js';
import { authMiddleware } from '../../middleware/middlewares.js';

const router = Router()

router.get('/', authMiddleware, getProfile)

export default router;