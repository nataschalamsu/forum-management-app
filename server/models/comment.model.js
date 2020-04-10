const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  comment: String
};