const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");

exports.handlProfileUpdate = async (req, res) => {
	const username = res.locals.username;
	const role = res.locals.role;
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
	try {
		var dbUserData = await User.findOneAndUpdate({ username }, userUpdate);
		var dbProfileData = await Profile.findOneAndUpdate(
			{ username },
			profileUpdate
		);

		if (dbProfileData == null || dbUserData == null) {
			return res.status(500).send(Payload(500, "data not updated", null));
		}
	} catch (err) {
		return res.status(500).send(Payload(500, "database error", err));
	}
};
