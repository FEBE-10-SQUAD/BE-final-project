const express = require("express");
const router = express.Router();
const { handlProfileUpdate } = require("../controllers/profile.controller");

const { auth, adminAuth } = require("../middlewares/auth");

const middlewares = [auth];

router.put("/:username", middlewares, handlProfileUpdate);

module.exports = router;
