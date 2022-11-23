require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");

exports.handlProfileUpdate = async (req, res) => {
	const username = res.locals.username;
	try {
		const dbUserData = await User.findOne({ username }, "-_id -password -__v");

		if (dbUserData == null) {
			return res.status(404).send(Payload(404, "data not found", null));
		}

		if (dbUserData.username != username) {
			return res
				.status(403)
				.send(Payload(403, "you must update your own profile", null));
		}
	} catch (err) {
		return res.status(500).send(Payload(500, "internal server error", err));
	}

	const body = req.body;
	const userUpdate = body.user;

	const profileUpdate = body.profile;
	profileUpdate.username = userUpdate.username;

	if (profileUpdate.username != undefined) {
		let dbUserData = await User.findOne({ username: profileUpdate.username });
		if (dbUserData != null) {
			return res
				.status(401)
				.send(Payload(401, "username already exsist", null));
		}
	}

	try {
		let dbUserData = await User.findOneAndUpdate({ username }, userUpdate);

		if (dbUserData == null) {
			return res.status(500).send(Payload(500, "data not updated", null));
		}

		// jwt
		const tokenPayload = {
			username: profileUpdate.username,
			role: dbUserData.role,
		};

		const newToken = jwt.sign(tokenPayload, process.env.SECRET_KEY);

		const dbProfileData = await Profile.findOneAndUpdate(
			{ username },
			profileUpdate
		);

		if (dbProfileData == null) {
			return res.status(500).send(Payload(500, "data not updated", null));
		}

		if (profileUpdate.username == undefined) {
			return res.status(201).send(Payload(201, "updated profile", null));
		} else {
			return res
				.status(201)
				.send(
					Payload(201, "updated username and profile", { token: newToken })
				);
		}
	} catch (err) {
		return res.status(500).send(Payload(500, "database error", err));
	}
};

exports.handleCVUpload = async (req, res) => {
	console.log(await req.file);
	return res.json("test");
};
