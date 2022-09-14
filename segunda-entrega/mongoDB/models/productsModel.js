import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    max: 300,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
}) 

const prodModel = mongoose.model('product', prodSchema)

export default prodModel;