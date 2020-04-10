const { comments, forumModel } = require('../models');

module.exports = {
  submitForum: (req, res) => {
    const user = req.headers.decoded.userId;
    let { title, content } = req.body;
    let image = req.imageURL;
    let tag = req.body.tag || 'Unknown';
    let newArticle = new forumModel({ user, title, content, image, tag });

    newArticle
      .save(function(err, added) {
        if (!err) {
          res
            .status(201)
            .json( added )
        } else {
          res
          .status(400)
          .json(err)
        }
      });
  },
  getArticleList: (req, res) => {
    article
      .find()
      .populate('user')
      .populate({
        path: 'comments',
        populate: [{
          path: 'user',
        }],
      })
      .then(articles => {
        res
          .status(200)
          .json(articles)
      })
      .catch(err => {
        res
          .status(400)
          .json(err)
      })
  },
  deleteArticle: (req,res) => {
    article
      .findByIdAndRemove({
        _id: req.params.id
      }, function(err, result) {
        if (!err) {
          res
            .status(200)
            .json(result)
        } else {
          res
            .status(400)
            .json(err)
        }
      })
  },
  updateArticle: (req, res) => {
    article
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
  getArticleById: function(req, res) {
    article
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
            message: 'article by id',
            article: result,
          })
      })
      .catch(err => {
        res
          .status(400)
          .send({
            error: err
          })
      })
  },
  postComment: (req, res) => {
    const idUser = req.headers.decoded.userId;
    const { comment } = req.body;
    const newComment = new comments({ 
      user: idUser, 
      comment,
    });
    newComment
      .save()
      .then(result => {
        article
          .findByIdAndUpdate({
            _id: req.body.id,
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