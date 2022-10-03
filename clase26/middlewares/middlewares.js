const userModel = require('../models/user');

const userExistMiddleware = async (req, res, next) => {
  const { email } = req.body;
  const findUser = await userModel.findOne({ email });
  if (!findUser) return next();
  res.redirect('/signup');
};

const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

module.exports = { userExistMiddleware, authMiddleware };
