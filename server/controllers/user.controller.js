const { users } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  signUp: (req, res) => {
    let {
      email, 
      password,
      firstName,
      lastName,
    } = req.body;
    let role = req.body.role || 'user';
    let hashed = bcrypt.hashSync(password, bcrypt.genSaltSync());
    password = hashed
    let newUser = new users({  
      email, 
      password,
      firstName,
      lastName,
      role,
    });

    newUser
      .save((err, result) => {
      if(err) {
        res
          .status(400)
          .json({
            message: err
          })
      } else {
        res
          .status(201)
          .json({
            newData: result
          })
      }
    })
  },
  signIn: (req, res) => {
    const { email, password } = req.body;

    users
      .findOne({
        email: email,
      }, (err, userLogin) => {
        if (err) {
          res
            .status(500)
            .send({
              message: err
            })
        } else {
          if (bcrypt.compareSync(password, userLogin.password)) {          
            let token = 
              jwt.sign({
                userId: userLogin.id,
                userEmail: userLogin.email,
                userRole: userLogin.role,
              }, process.env.SECRET);
            res
              .status(200)
              .send({
                message: 'login success',
                nowLogin: userLogin,
                token,
              });
          }
        }
      })
  },
  getUserById: (req, res) => {
    users
      .find({ _id: req.params.id })
      .populate({
        path: 'post',
        model: 'forum',
        populate: [{
          path: 'comments',
          model: 'comment',
          populate: [{
            path: 'user',
            model: 'user',
          }]
        }]
      })
      .exec()
      .then(result => {
        res
          .status(200)
          .send({
            message: 'user by id',
            user: result,
          }) 
      })
      .catch(err => {
        res
          .status(400)
          .send({
            error: err,
          })
      })
  },
};
