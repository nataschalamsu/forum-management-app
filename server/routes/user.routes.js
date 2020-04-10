const routes = require('express').Router();
const { usersController } = require('../controllers');
const { isLogin } = require('../middlewares/authentication');
const {
  signIn,
  signUp,
  getUserById,
} = usersController;

routes
  .post('/login', signIn)
  .post('/signup', signUp)
  .get('/:id', isLogin, getUserById)

module.exports = routes;