import { logger } from '../log4.js';
import userModel from '../models/userModel.js';

export const getProfile = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await userModel.findById(id);
    logger.info(user.avatar)
    res.render('profile', { user });
  } catch (err) {
    logger.warn(err);
  }
};
