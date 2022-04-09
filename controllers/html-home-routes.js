const router = require("express").Router();
const sequelize = require("../config/connection");

// Homepage route
router.get("/", (req, res) => {
  console.log("test");
  // res.render("homepage");
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    username: req.session.username,
  });
});

// This was data from the module that I commented out

// // Login path
// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/dashboard", { username: req.session.username });
//     return;
//   }
//   res.render("login");
// });

// // Signup path
// router.get("/signup", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
//   res.render("signup");
// });

// // Single Post HTML Route
// router.get("/post/:id", (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ["id", "title", "post_contents", "created_at"],
//     include: [
//       {
//         model: Comment,
//         attributes: [
//           "id",
//           "comment_contents",
//           "post_id",
//           "user_id",
//           "created_at",
//         ],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: "No post found with this id" });
//         return;
//       }

//       // serialize the data
//       const post = dbPostData.get({ plain: true });
//       res.render("single-post", {
//         post,
//         loggedIn: req.session.loggedIn,
//         username: req.session.username,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
