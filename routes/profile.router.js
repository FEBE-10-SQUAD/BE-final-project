const express = require("express");
const router = express.Router();
const {
	handlProfileUpdate,
	handleCVUpload,
} = require("../controllers/profile.controller");
const fileUpload = require("../utils/fileUpload");

const { auth, adminAuth } = require("../middlewares/auth");

const middlewares = [auth, fileUpload.single("cv")];

router.put("/", middlewares, handlProfileUpdate);
router.post("/", middlewares, handleCVUpload);

module.exports = router;
