const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { Walker, Job, Pets, Owner } = require("../models");

// this just calls all jobs on page load and stores it in the jobs variable to use in handlebars
router.get("/", (req, res) => {
  console.log(req.session.user_id);

  const owner = req.session.owner;
  const walker = req.session.walker;
  console.log("owner:", owner);
  console.log("walker:", walker);
  Job.findAll({
    // order: [['timeframe', 'DESC']],
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
  }).then((dbJobData) => {
    const jobs = dbJobData.map((job) => job.get({ plain: true }));
    res.render("jobsearch", {
      jobs,
      loggedIn: req.session.loggedIn,
      owner_id: req.session.user_id,
      owner: false,
      walker: true,
    });
  });
});

module.exports = router;
