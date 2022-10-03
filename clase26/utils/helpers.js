const bcrypt = require('bcrypt');

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const verifyPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

module.exports = { createHash, verifyPassword };
