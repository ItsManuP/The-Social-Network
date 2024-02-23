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
  salt: {
    type: binData,
    required: true,
    length: 16
  },
  createdAt: {
    type: Date,
    default: Date.now
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

let User;
let Post;

if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', userSchema);
}

if (mongoose.models.Post) {
  Post = mongoose.model('Post');
} else {
  Post = mongoose.model('Post', postSchema);
}

module.exports = {
  User,
  Post
};


