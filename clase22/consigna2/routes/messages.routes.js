import express from 'express'
import { deleteAll, getMessages, postMessage } from '../controller/prods.js'

const router = express.Router()

router.get('/', getMessages)
router.post('/', postMessage)
router.delete('/', deleteAll)

export default router