const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const comment = require('./comment.model');
const forum = require('./forum.model');
const user = require('./user.model');

const commentSchema = Schema(
  comment,
  {
    timestamp: true,
  },
);

const forumSchema = Schema(
  forum,
  {
    timestamp: true,
  },
);

const userSchema = Schema(
  user,
  {
    timestamp: true,
  },
);

const comments = mongoose.model('comment', commentSchema);
const forumModel = mongoose.model('comment', forumSchema);
const users = mongoose.model('user', userSchema);

module.exports = {
  comments,
  forumModel,
  users,
};