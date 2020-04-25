const router = require("express").Router();
const userRoutes = require("./users");
const checkRoutes = require("./checks");
const emailRoutes = require("./email");

// Book routes
router.use("/users", userRoutes);
router.use("/checks", checkRoutes);
router.use("/email", emailRoutes);

module.exports = router;
