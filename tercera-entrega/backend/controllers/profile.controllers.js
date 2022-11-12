import userModel from '../models/userModel.js';

export const getProfile = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await userModel.findById(id);
    console.log(user.avatar)
    res.render('profile', { user });
  } catch (err) {
    console.log(err);
  }
};
