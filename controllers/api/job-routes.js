const router = require("express").Router();
const { Job, Pets, Owner } = require("../../models");
const withAuth = require("../../utils/auth");
// require the operator form from Sequelize to use operators in queries
const { Op } = require("sequelize");

//  route coming into file is  https://pacific-depths-79804.herokuapp.com/api/jobs....

// get all jobs
router.get("/", (req, res) => {
  Job.findAll({
    order: [["timeframe", "DESC"]],
    include: [
      {
        model: Pets,
        attributes: ["pet_name", "pet_type", "description", "owner_id"],
      },
      {
        model: Owner,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbJobData) => res.json(dbJobData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get one Job by ID
router.get("/:id", (req, res) => {
  Job.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Pets,
        attributes: ["id", "pet_name", "pet_type", "description", "owner_id"],
      },
      {
        model: Owner,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: "No job found with this id" });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get *open* jobs by Zip
router.post("/zip", (req, res) => {
  // expects {location: #####}
  Job.findAll({
    order: [["timeframe", "DESC"]],
    where: {
      location: req.body.location,
      // walker_id: null
    },
    include: [
      {
        model: Pets,
        attributes: ["id", "pet_name", "pet_type", "description", "owner_id"],
      },
      {
        model: Owner,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: "No job found with this id" });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get jobs by owner
router.post("/owner", (req, res) => {
  Job.findAll({
    order: [["timeframe", "DESC"]],
    where: {
      owner_id: req.body.owner_id,
    },
    include: [
      {
        model: Pets,
        attributes: ["id", "pet_name", "pet_type", "description", "owner_id"],
      },
      {
        model: Owner,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: "No job found with this id" });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get jobs by walker
router.post("/walker", (req, res) => {
  // expected body {walker_id: {public key from Hiro}}
  Job.findAll({
    order: [["timeframe", "DESC"]],
    where: {
      walker_id: req.body.walker_id,
    },
    include: [
      {
        model: Pets,
        attributes: ["id", "pet_name", "pet_type", "description", "owner_id"],
      },
      {
        model: Owner,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: "No job found with this walker_id" });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new job (ie owner completes job order form)
router.post("/", (req, res) => {
  const id = req.session.user_id;
  Job.create({
    pay: req.body.pay,
    check_in: req.body.check_in,
    walk: req.body.walk,
    timeframe: req.body.timeframe,
    location: req.body.location,
    completed: req.body.completed,
    owner_id: id,
    walker_id: req.body.walker_id,
    animal_id: req.body.animal_id,
  })
    .then((dbJobData) => res.json(dbJobData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a job with the walker's id to "accept" the job
router.put("/accept/:id", (req, res) => {
  // expects { walker_id: 'Walker ID String'} to accept the job
  // expects { walker_id: null } to remove walker's acceptance
  Job.update(
    {
      walker_id: req.body.walker_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: "No job found with this id" });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Complete (or reopen) a job
router.put("/complete/:id", (req, res) => {
  // expects { completed: true } to complete the job
  // expects { completed: false } to remove walker's acceptance
  Job.update(
    {
      completed: req.body.completed,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: "No job found with this id" });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//  Delete a job
router.delete("/:id", (req, res) => {
  Job.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: "No job found with this id" });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
