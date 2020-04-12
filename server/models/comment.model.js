const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  comment: {
    type: String,
    require: [true, 'Comment cannot be empty'],
  }
};