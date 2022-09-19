import messageModel from "../models/messages.js";
import { normalize, schema } from "normalizr";

export const getMessages = async (req, res, next) => {

  const authorSchema = new schema.Entity('author', {} ,{ idAttribute: 'email' })
  const contentSchema = new schema.Entity('contents')
  const messageSchema = new schema.Entity('messages', {
    author: authorSchema,
    contents: [contentSchema]
  })

  try {
    const allmsg = await messageModel.find()
    const normalizedMsg = normalize(allmsg, messageSchema)
    res.status(200).json(normalizedMsg.entities.messages.undefined)
  } catch(err){
    res.status(401).json({msg: err.message})
    next()
  }
}

export const postMessage = async (req, res, next) => {
  const obj = req.body
  const msg = new messageModel(obj)
  try {
    await msg.save()
    res.status(200).json(msg)
  } catch(err){
    res.status(404).json({msg: err.message})
    next()
  }
}

export const deleteAll = async (req, res, next) => {
  try {
    await messageModel.deleteMany()
    res.status(200).json({msg: 'empty'})
  } catch(err){
    res.status(404)
    next()
  }
}
