import prodModel from "../models/productsModel.js"

//traer todos los productos
export const getProds = async (req, res) => {
  try {
    const prods = await prodModel.find()
    res.status(200).json(prods)
  }catch(err){res.status(404).json({message: err.message})}
}

//traer un producto especifico
export const getOneProd = async (req, res) => {
  const {id} = req.params
  try {
    const prod = await prodModel.find({_id: id})
    res.status(200).json(prod)
  }catch(err){res.status(404).json({message: err.message})}
}

//crear un producto
export const createProd = async (req, res) => {
  const obj = req.body
  const prod = new prodModel(obj)
  try {
    await prod.save()
    res.status(200).json(prod)
  } catch(err){res.status(404).json({message: err.message})}
}

//editar un producto, ya sea el precio, la imagen, etc
export const editProd = async (req, res) => {
  const {id} = req.params
  const obj = req.body
  try{
    const prod = await prodModel.updateOne({_id: id}, obj)
    res.status(200).json(prod)
  } catch(err){res.status(400).json({message: err.message})}
}

//eliminar un producto
export const deleteOne = async (req, res) => {
  const {id} = req.params
  try{
    await prodModel.deleteOne({_id: id})
    res.status(200).json({message: 'product deleted'})
  } catch(err){res.status(404).json({message: err.message})}
}

//borrar todos los productos
export const deleteAll = async (req, res) => {
  try {
    await prodModel.deleteMany()
    res.status(200).json({message: 'all deleted'})
  }catch(err){res.status(404).json({message: err.message})}
}