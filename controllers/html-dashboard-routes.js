const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { Job, Pets, Owner } = require("../models");

// route to the this file /dashboard

// User Dashboard HTML route
// router.get("/", withAuth, (req, res) => {
//   // res.render("dashboard", { loggedIn: true, username: req.session.username });
//   res.render("dashboard");
// });

router.get("/", (req, res) => {
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
    // console.log(jobs);
    res.render("dashboard", {
      jobs,
      loggedIn: req.session.loggedIn,
    });
  });
});

// added a /walker to test out the walker handlbars
router.get("/walker", (req, res) => {
  res.render("walker-dashboard");
});

// Path to edit page where user can edit or delete a post
router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      // use the ID from url parameters
      id: req.params.id,
    },
    attributes: ["id", "post_contents", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_contents",
          "post_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      // serialize data before passing to template
      const post = dbPostData.get({ plain: true });
      res.render("edit-post", {
        post,
        loggedIn: true,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Path to create a post HTML page
router.get("/create-post", withAuth, (req, res) => {
  res.render("create-post", { loggedIn: true, username: req.session.username });
  return;
});

module.exports = router;
