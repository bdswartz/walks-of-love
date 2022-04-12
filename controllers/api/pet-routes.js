const router = require("express").Router();
// const withAuth = require('../../utils/auth');
const { Pets } = require("../../models");

// Route coming into file is https://pacific-depths-79804.herokuapp.com/api/pets

/// GET /api/pets
router.get("/", (req, res) => {
  // Access our Pets model and run .findAll() method
  Pets.findAll()
    .then((dbPetsData) => res.json(dbPetsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/pets/id
router.get("/:id", (req, res) => {
  Pets.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPetsData) => {
      if (!dbPetsData) {
        res
          .status(404)
          .json({ message: "There was no pet found with this id." });
        return;
      }
      res.json(dbPetsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/pets
router.post("/", (req, res) => {
  const id = req.session.user_id;
  Pets.create({
    // id: req.body.id,
    pet_name: req.body.pet_name,
    owner_id: id,
    pet_type: req.body.pet_type,
    description: req.body.description,
  })
    .then((dbPetsData) => res.json(dbPetsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/Pets/1
router.put("/:id", (req, res) => {});

// DELETE /api/Pets/#
router.delete("/:id", (req, res) => {
  Pets.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPetsData) => {
      if (!dbPetsData) {
        res.status(404).json({ message: "No pet found with this id" });
        return;
      }
      res.json(dbPetsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
