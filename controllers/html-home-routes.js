const router = require("express").Router();
const sequelize = require("../config/connection");

// Homepage route
router.get("/", (req, res) => {
  // console.log("test");
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});


module.exports = router;
