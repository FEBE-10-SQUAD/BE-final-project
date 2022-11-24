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

		} else {
			
			const isPasswordMatch = bcrypt.compareSync(password, getUserByEmail.password);

			if (isPasswordMatch) {

				const token = jwt.sign({
					id: getUserByEmail.id,
					email: getUserByEmail.email
				},
					process.env.SECRET_KEY, {
					expiresIn: process.env.TOKEN_EXPIRATION,
				});

				return res.status(201).send(Payload(201, "login successful", { token }));

			}
		}
	} catch (err) {

		return res.status(500).send(Payload(500, "internal server error", err));

	}
};
