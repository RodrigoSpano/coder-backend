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
      quantity: 1,
      _id: findProd._id
    };

    const addCart = new cartModel(prod)
    await addCart.save()

    res.redirect('/')
  } catch(err){console.log(err)}
}

export const getCart = async (req, res) => {
  try{

    const prods = await cartModel.find()
    res.render('cart', {prods})

  }catch(err){console.log(err)}
}

export const delCart = async (req, res) => {
  await cartModel.deleteMany()
  res.redirect('/cart')
}