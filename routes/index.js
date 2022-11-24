const express = require("express");
const router = express.Router();

// ----------------- Import Router ----------------- //
const jobsRoute = require("./jobs.route");
const registerRoute = require("./register.router");
const loginRoute = require("./login.router");
const profileRoute = require("./profile.router");
const applyRoute = require("./apply.router");
// ----------------- End Import Router ----------------- //

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/profile", profileRoute);
router.use("/v1/admin", jobsRoute);
router.use("/v1/apply-job", applyRoute);

module.exports = router;
