import { Schema, model } from 'mongoose';
import { prodSchema } from './prodModel.js';

const cartSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    Category: String,
    quantity: Number,
    // prodId: String,
    _id: String
}, {
    _id: false
});

const cartModel = model('cart', cartSchema)

export default cartModel