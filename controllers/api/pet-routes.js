const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const { Pets } = require('../../models');

/// GET /api/pet
router.get('/', (req, res) => {
    // Acces our Pets model and run .findAll() method
    Pets.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/pet/id
router.get('/:id', (req, res) => {
    Pets.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'There was no pet found with this id.' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    Pets.create({
        id: req.body.id,
        pet_name: req.body.pet_name,
        owner_id: req.body.owner_id,
        pet_type: req.body.pet_type,
        description: req.body.description
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;