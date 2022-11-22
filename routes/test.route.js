const express = require("express");
const router = express.Router();
const { auth, adminAuth } = require("../middlewares/auth");

const {
	testGet,
	testPost,
	testPut,
	testDelete,
} = require("../controllers/test.controller");

const adminAccess = [auth, adminAuth];
const userAccess = [auth];

router.get("/", adminAccess, testGet);
router.post("/", userAccess, testPost);
router.put("/", testPut);
router.delete("/", testDelete);

module.exports = router;
