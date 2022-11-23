const express = require("express");
const router = express.Router();

// ----------------- Import Router ----------------- //

const jobsRoute = require("./jobs.route");

// ----------------- End Import Router ----------------- //

router.use("/v1/admin", jobsRoute);

module.exports = router;
