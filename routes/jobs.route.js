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
	handleAdminCreateJob
	// testPut,
	// testDelete,
} = require("../controllers/jobs.controller");

// ----------------- End Import Controller ----------------- //


// ----------------- Define Routes ----------------- //

router.get("/jobs", handleGetJob);
router.get("/jobs/:id", handleGetJobById);
router.post("/jobs", fileUpload.single('image'), handleAdminCreateJob);
// router.put("/", testPut);
// router.delete("/", testDelete);

// ----------------- Define Routes ----------------- //

module.exports = router;
