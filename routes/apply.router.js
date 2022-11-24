const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

// ----------------- Import Controller ----------------- //

const {
	handleUserApplyJob,
    handleGetApplyJobByAdminId
} = require("../controllers/apply.controller");

// ----------------- End Import Controller ----------------- //

const middlewares = require("../middlewares/auth");

// ----------------- Define Routes ----------------- //

router.post("/users", middlewares.auth, handleUserApplyJob);
router.get("/admin/:id", middlewares.auth, handleGetApplyJobByAdminId);

// ----------------- Define Routes ----------------- //

module.exports = router;
