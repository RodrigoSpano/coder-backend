import { Router } from 'express';
import infoRoute from './info.js';
import randomsRoute from './randoms.js';
const router = Router();

router.use('/info', infoRoute);
router.use('/api/randoms', randomsRoute);

export default router;
