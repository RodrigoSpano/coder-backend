import cartModel from '../models/cartModel.js'
import userModel from '../models/userModel.js'

export const authMiddleware = async (req, res, next) => {
  if(req.isAuthenticated()) return next()
  res.redirect('/auth/signup')
}

export const userExistsMiddleware = async (req, res, next) => {
  const { email} = req.body
    const user = await userModel.findOne({ email })
  if(!user) return next()
  res.redirect('/auth/exists')
}

export const cartProdExistsMiddleware = async (req, res, next ) => {
  const {id} = req.body
  const prod = await cartModel.findOne({prodId: id})
  if(prod) {
    await cartModel.updateOne({prodId: id}, {quantity: ++prod.quantity})
    res.redirect('/')
  } else {
    return next()
  }
}