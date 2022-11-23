const express = require("express");
const router = express.Router();

const testRoute = require("./test.route");
const registerRoute = require("./register.router");
const loginRoute = require("./login.router");
const profileRoute = require("./profile.router");

router.use("/test", testRoute);
router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/profile", profileRoute);

module.exports = router;
