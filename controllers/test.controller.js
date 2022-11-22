const Test = require("../model/test.model");

const payloadConstructor = (status, message, data) => {
	const payload = {
		status,
		message,
		data,
	};

	return payload;
};

const testGet = async (req, res) => {
	try {
		const data = await Test.find({}, "-__v");

		return res
			.status(200)
			.send(payloadConstructor(200, "data successfully grabbed", data));
	} catch (err) {
		return res
			.status(500)
			.send(payloadConstructor(500, "internal server error", err));
	}
};
const testPost = async (req, res) => {
	try {
		const data = req.body;
		const test = new Test(data);

		await test.save();

		return res
			.status(201)
			.send(payloadConstructor(201, "data created successfully", test));
	} catch (err) {
		return res
			.status(500)
			.send(payloadConstructor(500, "internal server error", err));
	}
};
const testPut = async (req, res) => {
	const data = req.body;

	const filter = {
		_id: data.id,
	};

	const update = {
		nama: data.nama,
	};

	try {
		const updateResponse = await Test.findOneAndUpdate(filter, update);

		return res.status(201).send(
			payloadConstructor(201, "data updated sucessfully", {
				id: updateResponse._id,
			})
		);
	} catch (err) {
		return res
			.status(500)
			.send(payloadConstructor(500, "internal server error", err));
	}
};

const testDelete = async (req, res) => {
	const data = req.body;
	const filter = {
		nama: data.nama,
	};
	try {
		const deleteResponse = await Test.deleteOne(filter); // bisa juga deleteMany

		res.status(200).send(
			payloadConstructor(200, "data deleted successfully", {
				deletedCount: deleteResponse.deletedCount,
			})
		);
	} catch (err) {
		return res
			.status(500)
			.send(payloadConstructor(500, "internal server error", err));
	}
};

module.exports = {
	testGet,
	testPost,
	testPut,
	testDelete,
};
