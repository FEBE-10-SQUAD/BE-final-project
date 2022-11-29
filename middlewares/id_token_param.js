require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Payload } = require("../templates/response");
const User = require("../model/user.model");

exports.id_token_param = async (req, res, next) => {
	if (req.params.id != res.locals.id) {
		return res.status(403).send(Payload(403, "forbidden", null));
	}
	next();
};
