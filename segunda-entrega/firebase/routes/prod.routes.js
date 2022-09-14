const express = require('express')
const { createProd, getprods, editProds, deleteProd } = require('../controllers/prod.js')

const router = express.Router()

router.get('/', getprods)
router.post('/', createProd)
router.put('/:id', editProds)
router.delete('/:id', deleteProd)

module.exports = {
  router
}