require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Payload } = require("../templates/response");
const User = require("../model/user.model");

exports.auth = async (req, res, next) => {
	const bearerAuth = req.headers.authorization;

	if (bearerAuth == undefined || bearerAuth.split(" ")[0] !== "Bearer")
		return res
			.status(401)
			.send(Payload(401, "Harus menggunakan authentikasi bearer", null));

	const token = bearerAuth.split(" ")[1];

	try {
		const { id, role, email } = jwt.verify(token, process.env.SECRET_KEY);

		const getUserByEmail = await User.findOne({ email });
		req.user = getUserByEmail;
		req.role = role;
		res.locals.id = id;
		next();
	} catch (err) {
		return res.status(401).send(Payload(401, "Token Invalid", null));
	}
};

exports.adminAuth = (res, req, next) => {
	if (req.role != "admin") {
		res.status(403).send(Payload(403, "Forbidden Access", null));
	}
	next();
};
