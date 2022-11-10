import {Router} from 'express' 
import { getFantasy, getFiction, getRomance } from '../../controllers/categories/category.controllers.js'
import { authMiddleware } from '../../middleware/middlewares.js'

const router = Router()

router.get('/fantasy', authMiddleware, getFantasy)
router.get('/fiction', authMiddleware, getFiction);
router.get('/romance', authMiddleware, getRomance);

export default router;