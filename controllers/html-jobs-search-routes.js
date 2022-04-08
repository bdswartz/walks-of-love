const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { Post, User, Comment } = require("../models");

// route to the this file /dashboard

// User Dashboard HTML route
// router.get("/", withAuth, (req, res) => {
//   // res.render("dashboard", { loggedIn: true, username: req.session.username });
//   res.render("dashboard");
// });

router.get("/", (req, res) => {
  res.render("jobsearch");
});

module.exports = router;
