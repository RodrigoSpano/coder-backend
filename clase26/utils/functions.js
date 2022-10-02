import bcrypt from 'bcrypt';

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

export const verifyPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};
