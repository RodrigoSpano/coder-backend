import { Schema, model } from 'mongoose';

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const userModel = model('users', userSchema);

export default userModel;
