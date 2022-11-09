import passport from 'passport';
import { Strategy } from 'passport-local';
import userModel from '../models/userModel.js'
import { createHash, verifyPassword } from './helpers.js';

passport.use('local-login', new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done)=>{
    const user = await userModel.findOne({ email })
    if(!user) return done(null, false)
    if(!verifyPassword(user, password)) return done(null, false, {message: 'wrong credentials'})
    return done(null, user)
  }
))

// passport.use('local-signup',
//   new Strategy(
//     {
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true,
//   },
//   async (req, email, password, done) => {
//     const user = await userModel.findOne({ email })
//     if(user) return done(null, false)
    
//     let newUser = {
//       email,
//       password: createHash(password)
//     }

//     const createUser = new userModel(newUser)
//     await createUser.save()
    
//     return done(null, newUser)
//   }
//   ));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userModel.findById(id);
  done(null, user);
});
