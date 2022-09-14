import express from 'express'
import { createProd, deleteAll, deleteOne, editProd, getOneProd, getProds } from '../controllers/prodsController.js';

const router = express.Router()

router.get('/', getProds)
router.get('/:id', getOneProd)
router.post('/', createProd)
router.put('/:id', editProd)
router.delete('/:id', deleteOne)
router.delete('/', deleteAll)

export default router;