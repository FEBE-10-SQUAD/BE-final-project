require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Payload } = require("../templates/response");

exports.auth = async (req, res, next) => {
	const bearerAuth = req.headers.authorization;

	if (bearerAuth == undefined || bearerAuth.split(" ")[0] !== "Bearer")
		return res
			.status(401)
			.send(Payload(401, "Harus menggunakan authentikasi bearer", null));

	const token = bearerAuth.split(" ")[1];

	try {
		const { username, role } = await jwt.verify(token, process.env.SECRET_KEY);

		if (role == "admin" || role == "user") {
			res.locals.role = role;
			res.locals.username = username;
			return next();
		} else {
			return res.status(401).send(Payload(401, "Siapa anda?", null));
		}
	} catch (err) {
		return res.status(401).send(Payload(401, "Token Expired", null));
	}
};

exports.adminAuth = (res, req, next) => {
	if (req.role != "admin") {
		res.status(403).send(Payload(403, "Forbidden Access", null));
	}
	next();
};
