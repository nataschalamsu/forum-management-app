module.exports = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  comment: String
};