import { Router } from 'express';
import passport from 'passport';
import { getLogin, postLogin } from '../controllers/login-controllers.js';

const router = Router();

router.get('/', getLogin);
router.post(
  '/',
  passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
  postLogin
);
export default router;
