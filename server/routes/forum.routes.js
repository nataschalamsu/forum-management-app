const routes = require('express').Router();
const { forumController } = require('../controllers');
const { isLogin } = require('../middlewares/authentication');
const {
  getAllPost,
  createPost,
  deletePost,
  updatePost,
  getPostById,
  createComment,
  getAllComment,
  deleteComment,
} = forumController;

routes
  .get('/post', isLogin, getAllPost)
  .get('/post/:id', isLogin, getPostById)
  .get('/comment', isLogin, getAllComment)
  .post('/create-post', isLogin, createPost)
  .post('/create-comment', isLogin, createComment)
  .delete('/delete-post/:id', isLogin, deletePost)
  .delete('/delete-comment/:id', isLogin, deleteComment)
  .put('/update-post/:id', isLogin, updatePost)

module.exports = routes;

