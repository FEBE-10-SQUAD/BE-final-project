const express = require("express");
const router = express.Router();

// ----------------- Import Router ----------------- //
const jobsRoute = require("./jobs.route");
const testRoute = require("./test.route");
const registerRoute = require("./register.router");
const loginRoute = require("./login.router");
const profileRoute = require("./profile.router");
const bookmarkRoute = require("./bookmark.route");
// ----------------- End Import Router ----------------- //

// middleware
router.use(express.json());

router.use("/test", testRoute);
router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/profile", profileRoute);
router.use("/bookmark", bookmarkRoute);
router.use("/v1/admin", jobsRoute);

module.exports = router;
