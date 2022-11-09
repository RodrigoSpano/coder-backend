import cartModel from '../../models/cartModel.js'
import prodModel from '../../models/prodModel.js'

export const getAddCart = (req, res) => {
  res.redirect('/')
}

export const postAddCart = async (req, res) => {
  const {id} = req.body
  try{
    const findProd = await prodModel.findOne({_id: id})
    console.log(findProd);
    
    const prod = {
      title: findProd.title,
      price: findProd.price,
      image: findProd.image,
      category: findProd.category,
      prodId: findProd._id
    };

    const addCart = new cartModel(findProd)
    await addCart.save()

    return res.status(200).json({cart: cartModel.find()})
  } catch(err){console.log(err)}
}