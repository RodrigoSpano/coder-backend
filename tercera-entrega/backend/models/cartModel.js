import { Schema, model } from 'mongoose';
import { prodSchema } from './prodModel.js';

const cartSchema = new Schema({
  title: String,
  price: Number,
  image: String,
  category: String
});

const cartModel = model('cart', cartSchema)

export default cartModel