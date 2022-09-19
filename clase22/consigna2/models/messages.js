import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: String,
  name: String, 
  lastName: String,
  age: Number,
  alias: String,
  avatar: String
})

const textSchema = new mongoose.Schema({
  author: String,
  text: String
})


const messageSchema = new mongoose.Schema({
  author: authorSchema,
  content: textSchema
})



const messageModel = mongoose.model('messages', messageSchema)

export default messageModel;