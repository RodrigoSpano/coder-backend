import passport from 'passport';
import { Strategy } from 'passport-local';
import userModel from '../models/usersModel';
import { verifyPassword } from './functions';

passport.use(
  'login',
  new Strategy(
    {
      passReqToCallback: true,
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      const user = await userModel.find({ username: username });
      if (!user) done(null, false);
      if (!verifyPassword(user, password)) done(null, false);
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  let user = userModel.findById({ id });
  done(null, user);
});
