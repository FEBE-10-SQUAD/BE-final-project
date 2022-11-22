const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");

const bcrypt = require("bcrypt");

exports.handleRegister = async (req, res) => {
	const data = req.body;
	data.role = "user";

	try {
		const emailExist = await User.exists({ email: data.email });
		const usernameExist = await User.exists({ username: data.username });

		if (emailExist != null) {
			return res.status(403).send(Payload(403, "email already exsisted", null));
		}

		if (usernameExist != null && emailExist != null) {
			return res
				.status(403)
				.send(Payload(403, "username and email already exsisted", null));
		}
		// hash password
		const saltRounds = 7;
		hash = bcrypt.hashSync(data.password, saltRounds);
		data.password = hash;

		// create new data
		const user = new User(data);
		const profile = new Profile({ username: data.username });

		// send data to db
		await user.save();
		await profile.save();

		return res
			.status(201)
			.send(Payload(201, "Account successfully created", null));
	} catch (err) {
		return res.status(500).send(Payload(500, "Internal Server Error", null));
	}
};
