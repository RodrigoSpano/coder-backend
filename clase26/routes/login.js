const Router = require('express').Router;
const passport = require('passport');
const { getLogin } = require('../controllers/loginController');

const router = Router();

router.get('/', getLogin);
router.post(
  '/',
  passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login-error',
    passReqToCallback: true,
  })
);

module.exports = router;
