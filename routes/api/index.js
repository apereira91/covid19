const router = require("express").Router();
const userRoutes = require("./users");
const checkRoutes = require("./checks");

// Book routes
router.use("/users", userRoutes);
router.use("/checks", checkRoutes)

module.exports = router;
