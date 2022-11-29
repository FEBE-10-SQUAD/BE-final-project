const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

const { handleLogin, handleCurrentUser } = require("../controllers/login.controller");

const middlewares = require("../middlewares/auth");

router.post("/", handleLogin);
router.get("/auth/me", middlewares.auth, handleCurrentUser);

module.exports = router;
