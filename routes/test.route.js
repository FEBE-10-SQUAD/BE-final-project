const express = require("express");
const router = express.Router();

const {
	testGet,
	testPost,
	testPut,
	testDelete,
} = require("../controllers/test.controller");

router.get("/", testGet);
router.post("/", testPost);
router.put("/", testPut);
router.delete("/", testDelete);

module.exports = router;
