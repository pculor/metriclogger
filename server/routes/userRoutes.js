const { Router } = require('express');
const Authentication = require('../middleware/Authentication');
const Validations = require('../middleware/Validations');
const UserController = require('../controllers/UserController');

const router = Router();

router
  .route('/signup')
  .post(Validations.validateSignup, UserController.UserSignup);

router
  .route('/login')
  .post(Validations.validateLogin, UserController.UserLogin);

router
  .route('/')
  .get(Authentication.AuthenticateUser, UserController.GetUser);

module.exports = router;
