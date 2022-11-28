const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

const { handleRegister } = require("../controllers/register.controller");

router.post("/", handleRegister);

module.exports = router;
