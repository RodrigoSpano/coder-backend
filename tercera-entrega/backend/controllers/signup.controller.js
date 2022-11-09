import userModel from '../models/userModel.js'
import { createHash } from '../utils/helpers.js'

export const postSignup = async (req, res) => {
  try{
    const { email, password, name, address, years, phoneArea, phone, avatar} = req.body
    const user = {
      email,
      password: createHash(password),
      name,
      address, 
      years,
      phoneArea,
      phone,
      avatar
    }
    const createUSer = new userModel(user)
    await createUSer.save()
    res.redirect('/auth/login')
  }catch(err){console.log(err)}
}