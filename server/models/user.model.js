const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    firstName: {
      type: String,
      required: [true, 'First name required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name required'],
    },
    email: {
      type: String,
      required: [true, 'User email required'],
      unique: [true, 'Email already exist'],
      validate: {
        validator: function(email) {
          let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
          let isEmail = emailRegex.test(email)
          return isEmail
        }
      }
    },
    password: {
      type: String,
      required: [true, 'password required'],
      validate: {
        validator: (password) => {
          return password.length >= 8;
        },
        message: 'Minimum password 8 characters',
      },
    },
    role: {
      type: String
    },
    post: [{
      type: Schema.Types.ObjectId,
      ref: 'forum',
    }],
};
