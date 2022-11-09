import { Schema, model } from 'mongoose';

export const prodSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  description: {
    type: String,
    max: 450,
    required: true,
    trim: true
  },
  stock: {
    type: Number,
    required:true,
    min:0,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  }
});

const prodModel = model('products', prodSchema)

export default prodModel;