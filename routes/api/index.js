const router = require("express").Router();
const travelerRoutes = require("./traveler-routes");
// const tripRoutes = require('./trip-routes');
// const locationRoutes = require('./location-routes');

router.use("/travelers", travelerRoutes);

module.exports = router;
