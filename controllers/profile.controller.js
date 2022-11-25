require("dotenv").config();
const jwt = require("jsonwebtoken");
const cloudinary = require("../cloudinaries/cloudinary");

const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");

exports.handleProfileUpdate = async (req, res) => {
	// 	{
	//     "profile": {
	//         "nama":"sssswwsss",
	//         "kota":"kota",
	//         "alamat":"alasssddsat",
	//         "tanggal_lahir":"2010-11-23T15:20:33.324Z",
	//         "no_handphone":"123123133",
	//         "about_me":"about_me"
	//     }
	// }
	const { id } = req.params;
	const body = req.body;

	let document = req.file; // udh melewati multer

	try {
		if (document != undefined) {
			// convert buffer to base64
			const fileBase64 = document.buffer.toString("base64");

			// build file from base64
			const file = `data:${document.mimetype};base64,${fileBase64}`;

			// upload file to cloudinary
			const cloudinaryDocuments = await cloudinary.uploader.upload(file);

			// disini ada memory leak di sisi cloudinary

			// save document URL
			var documentURL = cloudinaryDocuments.url;

			// update database
			const userData = await Profile.findOneAndUpdate(
				{ id_user: id },
				{ profile_picture: documentURL }
			);

			// end request
			if (documentURL != undefined) {
				return res
					.status(201)
					.send(Payload(201, "document succesfully uploaded", null));
			} else {
				return res
					.status(500)
					.send(Payload(500, "document failed to upload", null));
			}
		}

		let update = body.profile;

		const userData = await Profile.findOneAndUpdate({ id_user: id }, update);
		if (userData) {
			return res
				.status(201)
				.send(Payload(201, "data successfully updated", null));
		} else {
			return res.status(500).send(Payload(500, "data is not updated", null));
		}
	} catch (err) {
		return res.status(500).send(Payload(500, "unknown error", null));
	}
};

exports.handleProfileGet = (req, res) => {};
