const mongoose = require("mongoose");
const { Schema } = mongoose;
const apply = require("../model/apply.model");
const jobs = require("../model/jobsSchema");
const User = require("../model/user.model");

const { Payload } = require("../templates/response");


// ----------------- Handle User Apply Job  ----------------- //

const handleUserApplyJob = async(req, res, next) => {

    try {
        
        const { companyId, jobId, isAccepted } = req.body;

        const userId = req.user._id;

        const applyInput = new apply({
			userId,
            companyId,
			jobId,
            isAccepted
		});

		await applyInput.save();

		return res
			.status(201)
			.send(Payload(201, "Data created successfully", applyInput));

    } catch (err) {
        
        return res.status(500).send(Payload(500, "Internal server error", err));

    }

};

// ----------------- End Handle User Apply Job  ----------------- //


// ----------------- Handle Get Apply Job By Admin Id  ----------------- //

const handleGetApplyJobByAdminId = async(req, res, next) => {

    try {
        
        const { id } = req.params;

        const getApplyJobByAdminId = await apply.find({ companyId: id })
        .populate({path: 'userId', select: 'username'})
        .populate({path: 'companyId', select: 'username'})
        .populate({path: 'jobId', select: ['name', 'salary', 'image', 'description']});

        return res
			.status(200)
			.send(Payload(200, "Data grabbed successfully", getApplyJobByAdminId));

    } catch (err) {

        return res.status(500).send(Payload(500, "Internal server error", err));
        
    }

};

// ----------------- End Handle Get Apply Job By Admin Id  ----------------- //


module.exports = { handleUserApplyJob, handleGetApplyJobByAdminId };