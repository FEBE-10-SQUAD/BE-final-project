const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());
const { id_token_param } = require("../middlewares/id_token_param");
// router.use("/public/files", express.static(path.join(__dirname, "/storages")));

const {
	handleProfileUpdate,
	handleCVUpload,
	handleGetProfile,
	handleDeleteProfile,
	handleGetCV,
} = require("../controllers/profile.controller");

const fileUpload = require("../utils/fileUpload");

const { auth, adminAuth } = require("../middlewares/auth");

const middlewares = [auth, fileUpload.single("document"), id_token_param];

router.put("/:id", middlewares, handleProfileUpdate);
router.get("/:id", middlewares, handleGetProfile);
router.delete("/:id", middlewares, handleDeleteProfile);

router.get("/cv/:id", middlewares, handleGetCV);
router.post("/cv/:id", middlewares, handleCVUpload);

module.exports = router;
