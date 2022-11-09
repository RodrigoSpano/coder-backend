import {Router} from 'express' 
import passport from 'passport';
import {  postSignup } from '../../controllers/sessions/signup.controller.js';
import { userExistsMiddleware } from '../../middleware/middlewares.js'
const router = Router()

router.get('/', (req,res) => res.render('signup'))
router.post('/', userExistsMiddleware, postSignup)

//! error al serializar into session
// router.post('/', passport.authenticate('local-signup', {
//   failureRedirect: '/auth/signup',
//   passReqToCallback: true
// }))

export default router;