const express = require("express");
const router = express.Router();

// ----------------- Import Router ----------------- //
const jobsRoute = require("./jobs.route");
const testRoute = require("./test.route");
const registerRoute = require("./register.router");
const loginRoute = require("./login.router");
const profileRoute = require("./profile.router");
// ----------------- End Import Router ----------------- //

router.use("/test", testRoute);
router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/profile", profileRoute);
router.use("/v1/admin", jobsRoute);

module.exports = router;
