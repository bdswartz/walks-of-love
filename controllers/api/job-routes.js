const router = require('express').Router();
const { Job, Pets, Owner } = require('../../models');
const withAuth = require('../../utils/auth');

//  route coming into file is  /api/jobs....

// get all jobs
router.get('/', (req, res) => {
  Job.findAll({
      // order: [['timeframe', 'DESC']], 
      include: [
         {
           model: Pets,
           attributes: ['pet_name', 'pet_type', 'description', 'owner_id'],
         },
         {
           model: Owner,
           attributes: ['first_name','last_name']
         }
         ]
        })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// Get one Job by ID
  router.get('/:id', (req, res) => {
    Job.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Pets,
          attributes: ['id', 'pet_name', 'pet_type', 'description', 'owner_id'],
        },
          {
            model: Owner,
            attributes: ['first_name','last_name']
          }
        ]
    })
      .then(dbJobData => {
        if (!dbJobData) {
          res.status(404).json({ message: 'No job found with this id' });
          return;
        }
        res.json(dbJobData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// Get jobs by Zip
  router.post('/zip', (req, res) => {
    Job.findOne({
      where: {
        location: req.body.location
      },
      include: [
        {
          model: Pets,
          attributes: ['id', 'pet_name', 'pet_type', 'description', 'owner_id'],
        },
          {
            model: Owner,
            attributes: ['first_name','last_name']
          }
        ]
    })
      .then(dbJobData => {
        if (!dbJobData) {
          res.status(404).json({ message: 'No job found with this id' });
          return;
        }
        res.json(dbJobData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // Get jobs by owner
  router.post('/owner', (req, res) => {
    Job.findOne({
      where: {
        owner_id: req.body.owner_id
      },
      include: [
        {
          model: Pets,
          attributes: ['id', 'pet_name', 'pet_type', 'description', 'owner_id'],
        },
          {
            model: Owner,
            attributes: ['first_name','last_name']
          }
        ]
    })
      .then(dbJobData => {
        if (!dbJobData) {
          res.status(404).json({ message: 'No job found with this id' });
          return;
        }
        res.json(dbJobData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Get jobs by walker
router.post('/walker', (req, res) => {
  Job.findOne({
    where: {
      owner_id: req.body.owner_id
    },
    include: [
      {
        model: Pets,
        attributes: ['id', 'pet_name', 'pet_type', 'description', 'owner_id'],
      },
        {
          model: Owner,
          attributes: ['first_name','last_name']
        }
      ]
  })
    .then(dbJobData => {
      if (!dbJobData) {
        res.status(404).json({ message: 'No job found with this id' });
        return;
      }
      res.json(dbJobData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // Create a new job
  router.post('/', (req, res) => {
    Job.create({
      pay: req.body.pay,
      check_in: req.body.check_in,
      walk: req.body.walk,
      timeframe: req.body.timeframe,
      location: req.body.location,
      completed: req.body.completed,
      owner_id: req.body.owner_id,
      walker_id: req.body.walker_id,
      animal_id: req.body.animal_id
    })
      .then(dbJobData => res.json(dbJobData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // Edit a job by job id
  router.put('/:id', (req, res) => {
    Job.update(
      {
        pay: req.body.pay,
        check_in: req.body.check_in,
        walk: req.body.walk,
        timeframe: req.body.timeframe,
        location: req.body.location,
        completed: req.body.completed,
        owner_id: req.body.owner_id,
        walker_id: req.body.walker_id,
        animal_id: req.body.animal_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbJobData => {
        if (!dbJobData) {
          res.status(404).json({ message: 'No job found with this id' });
          return;
        }
        res.json(dbJobData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
//  Delete a job
  router.delete('/:id', (req, res) => {
    Job.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbJobData => {
        if (!dbJobData) {
          res.status(404).json({ message: 'No job found with this id' });
          return;
        }
        res.json(dbJobData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;