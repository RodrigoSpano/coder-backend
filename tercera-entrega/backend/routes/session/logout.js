import {Router} from 'express' 
import { getLogout } from '../../controllers/sessions/logout.controller.js';

const router = Router()

router.get('/', getLogout)

export default router;