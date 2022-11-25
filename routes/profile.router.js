const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

// router.use("/public/files", express.static(path.join(__dirname, "/storages")));

const {
	handleProfileUpdate,
	// handleCVUpload,
} = require("../controllers/profile.controller");

const fileUpload = require("../utils/fileUpload");

const { auth, adminAuth } = require("../middlewares/auth");

const middlewares = [auth, fileUpload.single("document")];

router.put("/:id", middlewares, handleProfileUpdate);
// router.post("/", middlewares, handleCVUpload);

module.exports = router;
