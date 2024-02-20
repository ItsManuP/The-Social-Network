const mongoose = require('./connection.js');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
    },
  id: {
    type: Number,
    required: true,
    unique: true,
    default: 1
  },
});

const postSchema = new mongoose.Schema({
  id:  {
        type: Number,
        required: true,
        unique: true,
        ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);



module.exports = {
  User,
  Post
};
