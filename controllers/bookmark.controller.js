require("dotenv").config();
const jwt = require("jsonwebtoken");
const cloudinary = require("../cloudinaries/cloudinary");

const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");

exports.handleAddBookmark = async (req, res) => {
	const { id, id_job } = req.params;
	try {
		await Profile.findOneAndUpdate(
			{ id_user: id },
			{
				$push: { bookmark: id_job },
			}
		);
		return res.status(201).send(Payload(201, "bookmark added", null));
	} catch (err) {
		return res.status(500).send(Payload(500, "Unknown error", null));
	}
};

exports.handleRemoveBookmark = async (req, res) => {
	const { id, id_job } = req.params;

	try {
		const data = await Profile.findOne({ id_user: id }, "-_id bookmark");

		if (!data.bookmark.includes(id_job)) {
			return res
				.status(400)
				.send(Payload(400, `job id: ${id_job} is not bookmarked`, null));
		}

		await Profile.findOneAndUpdate(
			{ id_user: id },
			{
				$pull: { bookmark: id_job },
			}
		);

		return res
			.status(202)
			.send(Payload(202, "data successfully deleted", null));
	} catch (err) {
		return res.status(500).send(Payload(500, "Unknown error", null));
	}
};

exports.handleGetAllBookmark = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await Profile.findOne({ id_user: id }, "-_id bookmark");

		return res
			.status(200)
			.send(Payload(200, "data successfully grabbed", data));
	} catch (err) {
		return res.status(500).send(Payload(500, "Unknown error", null));
	}
};
