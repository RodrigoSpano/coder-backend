const Router = require('express').Router;
const { authMiddleware } = require('../middlewares/middlewares');
const loginRoute = require('./login');
const signUpRoute = require('./signup');
const logoutRoute = require('./logout');
const getHome = require('../controllers/homeController');

const router = Router();

router.get('/', authMiddleware, getHome);

router.use('/login', loginRoute);
router.use('/signup', signUpRoute);
router.use('/logout', logoutRoute);

module.exports = router;
