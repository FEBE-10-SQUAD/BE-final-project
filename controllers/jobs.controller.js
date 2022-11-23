const jobs = require("../model/jobsSchema");
const cloudinary = require("../cloudinaries/cloudinary");

const payloadConstructor = (status, message, data) => {
	const payload = {
		status,
		message,
		data,
	};

	return payload;
};


// ----------------- Handle Get Job ----------------- //

const handleGetJob = async (req, res) => {

	try {

		const { category, name } = req.query;

		if (category) {

			const data = await jobs.find(
				{
					"category": new RegExp('.*' + category + '.*')
				}
			);

			return res
				.status(200)
				.send(payloadConstructor(200, "Data successfully grabbed", data));

		}

		if (name) {

			const data = await jobs.find(
				{
					"name": new RegExp('.*' + name + '.*')
				}
			);

			return res
				.status(200)
				.send(payloadConstructor(200, "Data successfully grabbed", data));

		}

		const data = await jobs.find({});

		return res
			.status(200)
			.send(payloadConstructor(200, "Data successfully grabbed", data));

	} catch (err) {

		return res
			.status(500)
			.send(payloadConstructor(500, "Internal server error", err));

	}

};

// ----------------- End Handle Get Job ----------------- //


// ----------------- Handle Get Job By Id ----------------- //

const handleGetJobById = async (req, res) => {

	try {

		const { id } = req.params;

		const data = await jobs.findById(id);

		return res
			.status(200)
			.send(payloadConstructor(200, "Data successfully grabbed", data));

	} catch (err) {

		return res
			.status(500)
			.send(payloadConstructor(500, "Internal server error", err));

	}

};

// ----------------- End Handle Get Job By Id ----------------- //


// ----------------- Handle Get Job By User Id ----------------- //

const handleGetJobByUserId = async (req, res) => {

	try {

		const { id } = req.params;

		const data = await jobs.find({ userId: id });

		return res
			.status(200)
			.send(payloadConstructor(200, "Data successfully grabbed", data));

	} catch (err) {

		return res
			.status(500)
			.send(payloadConstructor(500, "Internal server error", err));

	}

};

// ----------------- End Handle Get Job By User Id ----------------- //


// ----------------- Handle Admin Create Job ----------------- //

const handleAdminCreateJob = async (req, res) => {

	try {

		const { userId, category, name, company, employee, experience, salary, description } = req.body;

		const image = req.file;

		let images = "";

		if (image) {

			const fileBase64 = image.buffer.toString("base64");
			const file = `data:${image.mimetype};base64,${fileBase64}`;
			const cloudinaryImage = await cloudinary.uploader.upload(file);
			images = cloudinaryImage.url;

		}

		const jobsInput = new jobs({
			userId,
			category,
			name,
			company,
			employee,
			experience,
			salary,
			description,
			image: images
		});

		await jobsInput.save();

		return res
			.status(201)
			.send(payloadConstructor(201, "Data created successfully", jobsInput));

	} catch (err) {

		return res
			.status(500)
			.send(payloadConstructor(500, "Internal server error", err));
	}

};

// ----------------- End Handle Admin Create Job ----------------- //


// ----------------- Handle Admin Update Job ----------------- //

const handleAdminUpdateJob = async (req, res) => {

	try {

		const { id } = req.params;

		const { category, name, company, employee, experience, salary, description } = req.body;

		const image = req.file;

		const getJobDataById = await jobs.findById(id);

		if (getJobDataById.id == id) {

			let images = "";

			if (image) {

				const fileBase64 = image.buffer.toString("base64");
				const file = `data:${image.mimetype};base64,${fileBase64}`;
				const cloudinaryImage = await cloudinary.uploader.upload(file);
				images = cloudinaryImage.url;

			} else {
				images = getJobDataById.image;
			}

			const updatedJob = await jobs.updateOne({ id }, {
				category,
				name,
				company,
				employee,
				experience,
				salary,
				description,
				image: images
			});

			return res.status(201).send(
				payloadConstructor(201, "Data updated sucessfully", {
					updatedJob: updatedJob.modifiedCount
				})
			);
		}

	} catch (err) {

		return res
			.status(500)
			.send(payloadConstructor(500, "Internal server error", err));

	}
};

// ----------------- End Handle Admin Update Job ----------------- //


// ----------------- Handle Admin Delete Job ----------------- //

const handleAdminDeleteJob = async (req, res) => {
	
	try {

		const { id } = req.params;

		const getJobDataById = await jobs.findById(id);

		if (getJobDataById.id == id) {

			const deletedJob = await jobs.deleteOne({ id });

			res.status(200).send(
				payloadConstructor(200, "Data deleted successfully", {
					deletedJob: deletedJob.deletedCount,
				})
			);
		}

	} catch (err) {

		return res
			.status(500)
			.send(payloadConstructor(500, "Internal server error", err));

	}
};

// ----------------- End Handle Admin Delete Job ----------------- //


module.exports = {
	handleGetJob,
	handleGetJobById,
	handleGetJobByUserId,
	handleAdminCreateJob,
	handleAdminUpdateJob,
	handleAdminDeleteJob
};