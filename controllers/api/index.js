const router = require('express').Router();

//  base route for this file is /api (controllers/index)
const ownerRoutes = require('./owner-routes.js');
const walkerRoutes = require('./walker-routes.js');
const petRoutes = require('./pet-routes.js');
const jobRoutes = require('./job-routes.js');

router.use('/owners', ownerRoutes);
router.use('/walkers', walkerRoutes);
router.use('/pets', petRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;