import { logger } from '../../log4.js';
import cartModel from '../../models/cartModel.js';
import prodModel from '../../models/prodModel.js';
import userModel from '../../models/userModel.js';
import { sendSMS, sendWsp } from '../../utils/helpers.js';
import { sendEmail } from '../sessions/signup.controller.js';

export const getAddCart = (req, res) => {
  res.redirect('/');
};

export const postAddCart = async (req, res) => {
  const { id } = req.body;
  
  try {
    const findProd = await prodModel.findOne({ _id: id });
    logger.info(findProd);

    const cartProd = {
      quantity: 1,
      prodId: findProd._id,
      userId: req.user.id,
    };

    const addCart = new cartModel(cartProd);
    await addCart.save();

    res.redirect('/');
  } catch (err) {
    logger.warn(err);
  }
};

export const getCart = async (req, res) => {
  try {
    const cartProds = await cartModel.find();
    const prods = [];

    for (let prod of cartProds) {
      let product = await prodModel.findById(prod.prodId);
      let cartProd = {
        title: product.title,
        price: product.price,
        description: product.description,
        stock: product.stock,
        image: product.image,
        category: product.category,
        quantity: prod.quantity,
      };
      prods.push(cartProd);
    }

    res.render('cart', { prods });
  } catch (err) {
    logger.warn(err);
  }
};

export const delCart = async (req, res) => {
  await cartModel.deleteMany();
  res.redirect('/cart');
};

export const buyCart = async (req, res) => {
  try {
    //carrito
    const cartProds = await cartModel.find();
    const prods = [];

    //busco user
    let user = await userModel.findById(cartProds[0].userId);

    for (let prod of cartProds) {
      let product = await prodModel.findById(prod.prodId);
      let cartProd = {
        title: product.title,
        price: product.price,
        description: product.description,
        stock: product.stock,
        image: product.image,
        category: product.category,
        quantity: prod.quantity,
      };
      prods.push(cartProd);
    }
//DECLARO EL MENSAJE
    let msg = prods.map(
      (el) =>
        `<< ${el.title} - price per unit: ${el.price} - quantity: ${el.quantity} >>`
    );

    const mailOptions = {
      from: 'Servidor Node.js',
      to: process.env.TEST_MAIL, //el correo al cual enviarlo
      subject: `Nuevo pedido de ${user.email} `,
      html: `${msg}`,
    };

    sendEmail(mailOptions);

    const options = {
      body: `${msg}`,
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+5491166211051',
    };
    sendWsp(options);

    sendSMS(user)

    await cartModel.deleteMany()

    res.render('success',{})
  } catch (err) {
    logger.warn(err);
  }
};
