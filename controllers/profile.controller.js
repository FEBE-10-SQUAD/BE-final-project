require("dotenv").config();
const jwt = require("jsonwebtoken");
const cloudinary = require("../cloudinaries/cloudinary");

const User = require("../model/user.model");
const Profile = require("../model/profile.model");
const { Payload } = require("../templates/response");
const { findOne } = require("../model/user.model");

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

	let document = req.file; // udh melewati multer

	try {
		if (document != undefined) {
			// delete from cloudinary
			const dbData = await Profile.findOne({ id });
			if (dbDocument.document != null || dbData.profile_picture != null) {
				const regexPicture = /(?!\/)\w+(?=.(png|jpg|jpeg)$)/g;
				const pictureName = await dbData.profile_picture.match(regexPicture);
				console.log(pictureName);
				// delete file from cloudinary
				cloudinary.uploader.destroy(pictureName[0]).then(function (result) {
					console.log(result);
				});
			}

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

		const body = req.body;
		let update = body;

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

exports.handleGetProfile = async (req, res) => {
	const { id } = req.params;

	try {
		const dbData = await Profile.findOne(
			{ id_user: id },
			"-_id -id_user -bookmark -__v -document"
		);

		if (dbData == null) {
			return res.status(404).send(Payload(404, "data is not found", null));
		}

		return res
			.status(200)
			.send(Payload(200, "data successfully grabbed", dbData));
	} catch (err) {
		return res.status(500).send(Payload(500, "unknown error", null));
	}
};

exports.handleDeleteProfile = async (req, res) => {
	const { id } = req.params;

	try {
		const dbDocument = await Profile.findOne({ id });

		// delete from cloudinary
		if (dbDocument.document != null) {
			const regexPDF = /(?!\/)\w+(?=.pdf$)/g;
			const fileName = await dbDocument.document.match(regexPDF);
			// delete file from cloudinary
			cloudinary.uploader.destroy(fileName).then(function (result) {
				console.log(result);
			});
		}

		// profile picture
		if (dbDocument.profile_picture != null) {
			const regexPicture = /(?!\/)\w+(?=.(png|jpg|jpeg)$)/g;
			const pictureName = await dbDocument.profile_picture.match(regexPicture);
			// delete file from cloudinary
			cloudinary.uploader.destroy(pictureName).then(function (result) {
				console.log(result);
			});
		}

		const update = {
			profile_picture: null,
			nama: null,
			kota: null,
			alamat: null,
			tanggal_lahir: null,
			no_handphone: null,
			about_me: null,
			$set: {
				bookmark: [],
			},
			document: null,
		};
		const dbData = await Profile.findOneAndUpdate({ id_user: id }, update);

		if (dbData == null) {
			return res.status(404).send(Payload(404, "data is not found", null));
		}

		return res
			.status(200)
			.send(Payload(200, "data successfully deleted", null));
	} catch (err) {
		return res.status(500).send(Payload(500, "unknown error", null));
	}
};

exports.handleCVUpload = async (req, res) => {
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
				{ document: documentURL }
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
		return res.status(400).send(Payload(400, "no document attached", null));
	} catch (err) {
		return res.status(500).send(Payload(500, "unknown error", null));
	}
};

exports.handleGetCV = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await Profile.findOne(
			{ id_user: id },
			"-_id id_user document"
		);
		return res.status(200).send(Payload(200, "cv grabbed successfully", data));
	} catch (err) {
		res.status(500).send(Payload(500, "internal server error", null));
	}
};

exports.handleDeleteCV = async (req, res) => {
	const { id } = req.params;

	// get file name from db
	try {
		var dbDocument = await Profile.findOne({ id });
	} catch (err) {
		return res.status(500).send(Payload(500, "internal server error", null));
	}

	try {
		if (dbDocument.document != "") {
			const regex = /(?!\/)\w+(?=.pdf$)/g;
			const fileName = await dbDocument.document.match(regex);
			// delete file from cloudinary
			cloudinary.uploader.destroy(fileName).then(function (result) {
				console.log(result);
			});
			// delete from database
			await Profile.findOneAndUpdate({ id }, { document: null });

			return res
				.status(200)
				.send(Payload(200, "document succesfully deleted", null));
		}
		return res.status(400).send(Payload(400, "document doesn't exsist", null));
	} catch (err) {
		return res.status(500).send(Payload(500, "internal server error", null));
	}
};

exports.handleUpdateCV = async (req, res) => {
	const { id } = req.params;
	let document = req.file;
	try {
		const dbDocument = await Profile.findOne({ id });

		if (dbDocument.document != "" || dbDocument.document != null) {
			const regex = /(?!\/)\w+(?=.pdf$)/g;
			const fileName = await dbDocument.document.match(regex);
			// delete file from cloudinary
			cloudinary.uploader.destroy(fileName).then(function (result) {
				console.log(result);
			});

			// update from database
			await Profile.findOneAndUpdate({ id }, { document });
			// convert buffer to base64
			const fileBase64 = document.buffer.toString("base64");

			// build file from base64
			const file = `data:${document.mimetype};base64,${fileBase64}`;

			// upload file to cloudinary
			const cloudinaryDocuments = await cloudinary.uploader.upload(file);

			// save document URL
			var documentURL = cloudinaryDocuments.url;

			// update database
			const userData = await Profile.findOneAndUpdate(
				{ id_user: id },
				{ document: documentURL }
			);

			return res
				.status(200)
				.send(Payload(200, "document succesfully updated", null));
		}
		return res.status(400).send(Payload(400, "document doesn't exsist", null));
	} catch (err) {
		return res.status(500).send(Payload(500, "internal server error", null));
	}
};
