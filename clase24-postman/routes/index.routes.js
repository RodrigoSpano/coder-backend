import express from 'express'
import { deLogout, getLogin, postLogin } from '../controllers/sessionController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';


const router = express.Router()

router.post('/login', postLogin)

router.get('/login', authMiddleware, getLogin)

router.delete('/logout', authMiddleware, deLogout )

export default router;