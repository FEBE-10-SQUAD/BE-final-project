const express = require("express");
const router = express.Router();

const testRoute = require("./test.route");

router.use("/test", testRoute);

module.exports = router;
