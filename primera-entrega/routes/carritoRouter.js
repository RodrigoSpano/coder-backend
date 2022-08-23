import { Router } from "express";
import { createCart, deleteCart, deleteProd, getCartProds, postCartProds,  } from "../controllers/carritoController.js";

const router = Router()

router.post('/', createCart)
router.delete('/:id', deleteCart)
router.get('/:id/productos', getCartProds)
router.post('/:id/productos', postCartProds)
router.delete('/:id/productos/:id_prod', deleteProd)

export default router;