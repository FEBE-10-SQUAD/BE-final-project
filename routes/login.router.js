const express = require("express");
const router = express.Router();
const { handleLogin, handleCurrentUser } = require("../controllers/login.controller");

const middlewares = require("../middlewares/auth");

router.post("/", handleLogin);
router.get("/auth/me", middlewares.auth, handleCurrentUser);

module.exports = router;
