import { logger } from '../../log4.js';
import prodModel from '../../models/prodModel.js';

export const getFantasy = async (req, res) => {
  try{
    const prods = await prodModel.find({category: 'fantasy'}) 
    res.render('home', {prods})
  }catch(err){logger.warn(err)}
}

export const getFiction = async (req, res) => {
  try{
    const prods = await prodModel.find({category: 'fiction'}) 
    res.render('home', {prods})
  }catch(err){logger.warn(err)}
}
export const getRomance = async (req, res) => {
  try{
    const prods = await prodModel.find({category: 'romance'}) 
    res.render('home', {prods})
  }catch(err){logger.warn (err)}
}