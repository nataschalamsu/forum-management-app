module.exports = {
  title: {
    type: String,
    required: [true, 'article required']
  },
  content: {
    type: String,
    required: [true, 'write the content']
  },
  image: {
    type: String
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