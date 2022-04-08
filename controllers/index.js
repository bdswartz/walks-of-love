// Master controller file to further route to more specialized controller files
const router = require("express").Router();
const htmlHomeRoutes = require("./html-home-routes.js");
const htmlDashboardRoutes = require("./html-dashboard-routes.js");
const htmlJobsSearchRoutes = require("./html-jobs-search-routes.js");
const apiRoutes = require("./api");

router.use("/", htmlHomeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", htmlDashboardRoutes);
router.use("/jobs", htmlJobsSearchRoutes);

// If invalid route, let user know with 404 error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
