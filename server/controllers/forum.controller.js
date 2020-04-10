const { comments, forumModel, users } = require('../models');

module.exports = {
  createPost: (req, res) => {
    const { userId } = req.headers.decoded;
    let { title, content } = req.body;
    let image = req.imageURL;
    let tag = req.body.tag || null;
    let newPost = new forumModel({ userId, title, content, image, tag });

    newPost
      .save()
      .then(result => {
        console.log(result);
        users
          .findByIdAndUpdate(
            { _id: userId },
            { $push: { post: result }}
          )
          .then(response => {
            res
              .status(200)
              .json({
                message: 'successfully posted',
                post: response,
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
          .json(err)
      })
  },
  getAllPost: (req, res) => {
    forumModel
      .find()
      .populate('user')
      .populate({
        path: 'comments',
        populate: [{
          path: 'user',
        }],
      })
      .then(post => {
        res
          .status(200)
          .json(post)
      })
      .catch(err => {
        res
          .status(400)
          .json(err)
      })
  },
  deletePost: (req,res) => {
    const { userId } = req.headers.decoded;

    forumModel
      .findByIdAndRemove({
        _id: req.params.id
      })
      .then(result => {
        console.log(result);
        users
          .findByIdAndUpdate({
            _id: userId,
          }, {
            $pull: { post: req.params.id }
          })
          .then(response => {
            res
              .status(200)
              .json({
                message: 'successfully deleted',
              })
          })
          .catch(err => {
            console.log(err);
            res
              .status(400)
              .json({
                error: err,
              })
          })
      })
      .catch(err => {
        console.log(err);
        res
          .status(400)
          .json({
            error: err,
          })
      })
  },
  updatePost: (req, res) => {
    forumModel
      .findByIdAndUpdate({
        _id: req.params.id
      }, req.body, function(err, updated) {
        if (!err) {
          res
            .status(200)
            .json(updated)
        } else {
          res
            .status(400)
            .json(err)
        }
      })
  },
  getPostById: (req, res) => {
    forumModel
      .find({
        _id: req.params.id
      })
      .populate('user')
      .populate({
        path: 'comments',
        populate: [{
          path: 'user',
        }],
      })
      .then(result => {
        res
          .status(200)
          .send({
            message: 'post by id',
            post: result,
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
  createComment: (req, res) => {
    const idUser = req.headers.decoded.userId;
    const { comment, id } = req.body;
    const newComment = new comments({ 
      user: idUser, 
      comment,
    });
    newComment
      .save()
      .then(result => {
        forumModel
          .findByIdAndUpdate({
            _id: id,
          }, {
            $push: {
              comments: result.id,
            },
          })
          .then(response => {
            res
              .status(200)
              .json({
                message: 'comment posted',
                post: response,
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
          .json(err)
      })
  },
  getAllComment: (req, res) => {
    comments
      .find()
      .populate('user')
      .then(respond => {
        res
          .status(200)
          .send({
            message: 'all comment',
            comment: respond,
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
  deleteComment: (req, res) => {
    comments
      .findByIdAndRemove({
        _id: req.params.id
      })
      .then(result => {
        res
          .status(200)
          .json({ message: 'comment deleted' })
      })
      .catch(err => {
        res
          .status(400)
          .json(err)
      })
  },
};