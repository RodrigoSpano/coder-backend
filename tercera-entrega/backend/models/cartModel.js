import { Schema, model } from 'mongoose';
import { prodSchema } from './prodModel.js';

const cartSchema = new Schema({
  quantity: Number,
  prodId: Schema.Types.ObjectId,
  userId: Schema.Types.ObjectId,
});

const cartModel = model('cart', cartSchema);

export default cartModel;
