import { Router } from 'express';
import { getCant, getCantDef } from '../controller.js';

const router = Router();

router.get('/:cant', getCant);
router.get('/', getCantDef);

export default router;
