// Master controller file to further route (from server.js) to more specialized controller files
const router = require('express').Router();
const htmlHomeRoutes = require('./html-home-routes.js');
const apiRoutes = require('./api');

router.use('/', htmlHomeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', htmlDashboardRoutes);

// If invalid route, let user know with 404 error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;