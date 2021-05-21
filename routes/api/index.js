const router = require("express").Router();
const travelerRoutes = require("./traveler-routes");
const tripRoutes = require('./trip-routes');
const locationRoutes = require('./location-routes');

router.use("/travelers", travelerRoutes);
router.use("/locations", locationRoutes);
router.use("/trips", tripsRoutes);

module.exports = router;
