const router = require('express').Router();

//  base route for this file is /api (controllers/index)
const ownerRoutes = require('./owner-routes.js');
const walkerRoutes = require('./walker-routes.js');
const petRoutes = require('./pet-routes.js');

router.use('/owner', ownerRoutes);
router.use('/walker', walkerRoutes);
router.use('/pets', petRoutes);

module.exports = router;