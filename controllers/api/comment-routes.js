const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//  route coming into file is /api/comments

//  Get all comments  ****checked
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
          'id', 
          'comment_contents', 
          'user_id', 
          'post_id',
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post a comment to a post  **** checked
router.post('/', withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Comment.create({
      comment_contents: req.body.comment_contents,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// Delete a post based on parameter passed in url **** checked
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;