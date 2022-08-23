import { Router } from 'express'
import { deleteProduct, editProduct, getProdById, getProducts, postProduct } from '../controllers/productosControllers.js';

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProdById)
router.post('/', postProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteProduct)

export default router;