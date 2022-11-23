require("dotenv").config();

const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.handleLogin = async (req, res) => {
	const data = req.body;

	let dbUserData = null;
	// check email
	try {
		const userData = await User.findOne({
			email: data.email,
		});

		if (userData == null) {
			return res
				.status(401)
				.send(
					Payload(
						401,
						"email doesn't exsist check your email or register",
						null
					)
				);
		}

		dbUserData = userData;
	} catch (err) {
		return res.status(500).send(Payload(500, "internal server error", err));
	}

	// check password
	try {
		const password = data.password;
		const passwordMatched = bcrypt.compareSync(password, dbUserData.password);

		if (!passwordMatched) {
			return res.status(401).send(Payload(401, "password incorrect", null));
		}
	} catch (err) {
		return res.status(500).send(Payload(500, "internal server error", err));
	}

	// generate and send token
	const tokenPayload = {
		username: dbUserData.username,
		role: dbUserData.role,
	};
	const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
		expiresIn: process.env.TOKEN_EXPIRATION,
	});

	return res.status(200).send(Payload(200, "login successful", { token }));
};
