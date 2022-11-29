const mongoose = require("mongoose");
const { Schema } = mongoose;

const applySchema = new Schema(
	{
        isAccepted: 'Boolean',
		userId: {
            type: mongoose.Schema.Types.ObjectId,
			ref: "User"
        },
		companyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
			ref: "jobs"
        }
	},
	{
		timestamps: true
	}
);

applySchema.methods.print = function print() {
	const text = this.name ? `printing... ${this.name}` : "doesn't exsist";
	console.log(text);
};

const apply_job = mongoose.model("apply_job", applySchema);

module.exports = apply_job;
