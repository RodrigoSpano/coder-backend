import express from 'express'
import { addProd, delProd, editCart, emptyCart, getCart } from '../controllers/cartController.js';

const router = express.Router()

router.get('/', getCart)
router.post('/', addProd)
router.put('/:id', editCart)
router.delete('/:id', delProd)
router.delete('/', emptyCart)

export default router;