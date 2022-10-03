const userModel = require('../models/user');

const getHome = async (req, res) => {
  console.log(req.session);
  res.render('home');
};

module.exports = getHome;
