const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const cors = require("cors");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

const { id_token_param } = require("../middlewares/id_token_param");

const { auth, adminAuth } = require("../middlewares/auth");

const {
	handleAddBookmark,
	handleRemoveAllBookmark,
	handleRemoveBookmark,
	handleGetAllBookmark,
} = require("../controllers/bookmark.controller");

const middlewares = [auth, id_token_param];

router.post("/:id/job/:id_job", middlewares, handleAddBookmark);
router.delete("/:id/job/:id_job", middlewares, handleRemoveBookmark);
router.delete("/:id", middlewares, handleRemoveAllBookmark);
router.get("/:id", middlewares, handleGetAllBookmark);

module.exports = router;
