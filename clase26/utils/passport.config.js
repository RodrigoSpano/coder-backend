const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../models/user');
const { createHash, verifyPassword } = require('./helpers');

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await userModel.findOne({ email });
      if (!user) return done(null, false);
      if (!verifyPassword(user, password))
        return done(null, false, { message: 'la contra no coincide' });
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userModel.findById(id);
  done(null, user);
});
