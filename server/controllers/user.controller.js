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
    let newUser = new users({  
      email, 
      password,
      firstName,
      lastName,
      role,
    });

    newUser
      .save()
      .then(result => {
        users
          .findOneAndUpdate({
            email: result.email,
          }, { password: hashed })
          .then(result => {
            const { _id, email, firstName, lastName, role } = result;
            res
              .status(201)
              .json({
                _id,
                email,
                firstName,
                lastName,
                role,
              })
          })
          .catch(err => {
            res
              .status(400)
              .json(err)
          })
      })
      .catch(err => {
        res
          .status(400)
          .json({ message: err })
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

            const {
              _id,
              firstName,
              lastName,
              email,
              role,
            } = userLogin;

            res
              .status(200)
              .send({
                isLogin: true,
                nowLogin: {
                  _id,
                  firstName,
                  lastName,
                  email,
                  role,
                },
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
