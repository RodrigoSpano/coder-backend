import express from 'express'
import { getLogin, logout, postLogin } from '../controllers/sessionController.js';
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = express.Router()
router.get('/', (req, res) => {
  res.render('pages/index', {})
})

router.post('/login', postLogin)

router.get('/login', authMiddleware, getLogin)

router.delete('/login', authMiddleware, logout)

export default router;