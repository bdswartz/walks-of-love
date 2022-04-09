const router = require('express').Router();
const { Job, Pets, Owner } = require('../../models');
const withAuth = require('../../utils/auth');
// require the operator form from Sequelize to use operators in queries
const { Op } = require("sequelize");

//  route coming into file is  /api/jobs....

// get all jobs   ***tested
router.get('/', (req, res) => {
  Job.findAll({
      order: [['timeframe', 'DESC']], 
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

// Get one Job by ID    ***tested
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

// Get *open* jobs by Zip   *****tested
  router.post('/zip', (req, res) => {
    Job.findAll({
      order: [['timeframe', 'DESC']], 
      where: {
        location: req.body.location,
        // walker_id: null
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

// Experimental post for finding jobs by multiple values NOT TO BE USED YET
// currently set up to give all jobs in a user specified time range ***tested
router.post('/find', (req, res) => {
  // expected {time_begin: ISO time string, time_end:ISO time string}
  Job.findAll({
    order: [['timeframe', 'DESC']], 
    where: {
      timeframe: {[Op.between]: [req.body.time_begin,req.body.time_end]}
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


  // Get jobs by owner  ****tested
  router.post('/owner', (req, res) => {
    Job.findAll({
      order: [['timeframe', 'DESC']], 
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

// Get jobs by walker   ****tested
router.post('/walker', (req, res) => {
  Job.findAll({
    order: [['timeframe', 'DESC']], 
    where: {
      walker_id: req.body.walker_id
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
        res.status(404).json({ message: 'No job found with this walker_id' });
        return;
      }
      res.json(dbJobData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // Create a new job  ****tested
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

  // Edit a job by job id - used for a walker to accept a job by 
  // putting the walker_id into the field 
  router.put('/:id', (req, res) => {
    // expected body { ""walker_id": # }
    Job.update(
      {
        // pay: req.body.pay,
        // check_in: req.body.check_in,
        // walk: req.body.walk,
        // timeframe: req.body.timeframe,
        // location: req.body.location,
        // completed: req.body.completed,
        // owner_id: req.body.owner_id,
        walker_id: req.body.walker_id,
        // animal_id: req.body.animal_id
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
//  Delete a job  ***** tested
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