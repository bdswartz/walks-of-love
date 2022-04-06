const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//  route coming into file is  /api/posts....

// get all posts  *** checked
router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
        'id', 
        'title',
        'post_contents',
        'user_id',
        'created_at'
      ], 
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_contents', 'user_id', 'post_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
          {
            model: User,
            attributes: ['username']
          }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// Get one Post  **** checked
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 
        'title',
        'post_contents',
        'user_id',
        'created_at'
      ], 
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_contents', 'user_id', 'post_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
          {
            model: User,
            attributes: ['username']
          }
        ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // Create a new post  **** checked
  router.post('/', (req, res) => {
    Post.create({
      title: req.body.title,
      post_contents: req.body.post_contents,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // Edit a post 
  router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.post_title,
        post_contents: req.body.post_contents
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
//  Delete a post  ****checked
  router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
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