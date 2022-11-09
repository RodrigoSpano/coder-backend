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