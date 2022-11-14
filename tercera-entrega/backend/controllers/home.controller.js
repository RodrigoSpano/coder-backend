import { logger } from '../log4.js';
import prodModel from '../models/prodModel.js';

export const getHome = async (req, res) => {
  try{
    const prods = await prodModel.find({})
    res.render('home', {prods})
  }catch(err){logger.warn(err)}
}