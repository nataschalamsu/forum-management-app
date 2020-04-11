const routes = require('express').Router();
const { usersController } = require('../controllers');
const { isLogin } = require('../middlewares/authentication');
const {
  signIn,
  signUp,
  getUserById,
} = usersController;

routes
  .get('/', isLogin, getUserById)
  .post('/login', signIn)
  .post('/signup', signUp)

module.exports = routes;