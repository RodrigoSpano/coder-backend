import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  years: {
    type: Number,
    required: true,
    trim: true,
  },
  phoneArea: {
    type: String || Number,
    required: true,
  },
  phone: {
    type: Number || String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const userModel = new model('Users', userSchema);

export default userModel;
