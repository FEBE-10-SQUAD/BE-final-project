const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const fileUpload = require("../utils/fileUpload");

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

// ------------------------- Public File Access ------------------------- //

router.use("/public/files", express.static(path.join(__dirname, "/storages")));

// ------------------------- End Public File Access ------------------------- //

// ----------------- Import Controller ----------------- //

const {
	handleGetJob,
	handleGetJobById,
	handleGetJobByUserId,
	handleAdminCreateJob,
	handleAdminUpdateJob,
	handleAdminDeleteJob,
} = require("../controllers/jobs.controller");

// ----------------- End Import Controller ----------------- //

const middlewares = require("../middlewares/auth");

// ----------------- Define Routes ----------------- //

router.get("/jobs", handleGetJob);
router.get("/jobs/:id", handleGetJobById);
router.get("/:id/jobs", middlewares.auth, handleGetJobByUserId);
router.post("/jobs", middlewares.auth, fileUpload.single("image"), handleAdminCreateJob);
router.put("/jobs/:id", middlewares.auth, fileUpload.single("image"), handleAdminUpdateJob);
router.delete("/jobs/:id", middlewares.auth, handleAdminDeleteJob);

// ----------------- Define Routes ----------------- //

module.exports = router;
