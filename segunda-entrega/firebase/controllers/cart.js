const { create, read, update, deleteOne } = require('../server.js')


const createProd = async (req, res) => {
  const obj = req.body
  await create('carrito', obj)
  res.status(200).json({msg: 'pdoducto agregado'})
}

const getprods = async (req, res) => {
  await read('carrito')
  res.status(200).json({msg: 'productos traidos'})
}

const editProds = async (req, res) => {
  const {id} = req.params
  const obj = req.body
  await update('carrito', id, obj)
  res.status(200).json({msg: 'prod updated'})
}

const deleteProd = async (req, res) => {
  const {id} = req.params
  await deleteOne('carrito', id)
  res.status(200).json({msg:'deleted'})
}

module.exports = {
  createProd,
  getprods,
  editProds,
  deleteProd
}