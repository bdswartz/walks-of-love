const User = require('./user');
const Post = require('./post');
const Comment = require('./comments');

// create associations between users and posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Create associations between posts and comments and users
// Comments belong to users and posts and a user and a post can have many comments
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });

module.exports = { User, Post, Comment };