const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
  title: {
    type: String,
    required: [true, 'title required'],
  },
  content: {
    type: String,
    required: [true, 'content required'],
  },
  tag: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
}