import cartModel from "../models/cartModel.js"

//traer todo lo que hay en el carrito
export const getCart = async (req, res) => {
    try {
      const cart = await cartModel.find()
      res.status(200).json(cart)
    } catch(err){res.status(404).json({message: err.message})}
}

//agregar producto al carrito
export const addProd = async (req, res) => {
  const obj = req.body
  const prod = new cartModel(obj)
  try{
    await prod.save()
    res.status(200).json(prod)
  } catch(err){res.status(404).json({message: err.message})}
}

//editar producto del carro, por ejemplo, la cantidad seleccionada de un productos, 2 zapatillas por ejemplo
export const editCart = async (req, res) => {
  const {id} = req.params
  const obj = req.body
  try {
    const prod = await cartModel.updateOne({_id: id}, obj)
    res.status(200).json(prod)
  } catch(err){res.status(404).json({message: err.message})}
}

//eliminar un producto del carrito
export const delProd = async (req, res) => {
  const {id} = req.params
  try{
    await cartModel.deleteOne({_id: id})
    res.status(200).json({message: 'product deleted from cart'})
  } catch(err){res.status(404).json({message: err.message})}
}

//vaciar carrito
export const emptyCart = async (req, res) => {
  try {
    await cartModel.deleteMany()
    res.status(200).json({message: 'cart is empty'})
  } catch(err){res.status(404).json({message: err.message})}
}