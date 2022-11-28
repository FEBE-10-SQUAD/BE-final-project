require("dotenv").config();

const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.handleLogin = async (req, res) => {
	try {
		const { email, password } = req.body;

		const getUserByEmail = await User.findOne({ email });

		if (!getUserByEmail) {
			return res.status(401).send(Payload(401, "Email not registered ", null));
		}
		const isPasswordMatch = bcrypt.compareSync(
			password,
			getUserByEmail.password
		);

		if (isPasswordMatch) {
			// generate and send token
			const tokenPayload = {
				id: getUserByEmail._id,
				email: getUserByEmail.email,
				role: getUserByEmail.role,
			};
			const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
				expiresIn: "24h",
			});

			return res
				.status(200)
				.send(
					Payload(200, "login successful", { id: getUserByEmail._id, token })
				);
		} else {
			return res.status(401).send(
				Payload(401, "please check your password", {
					id: getUserByEmail._id,
					token,
				})
			);
		}
	} catch (err) {
		return res.status(500).send(Payload(500, "internal server error", err));
	}
};
