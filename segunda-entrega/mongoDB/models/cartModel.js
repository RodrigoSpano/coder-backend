import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  image:{
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    trim: true
  }
})

const cartModel = mongoose.model('cart', cartSchema)

export default cartModel