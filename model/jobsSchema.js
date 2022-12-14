const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobsSchema = new Schema(
	{
		category: "String",
		name: "String",
		company: "String",
		employee: "String",
		experience: "String",
		salary: "String",
		image: "String",
		description: "String",
		companyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

jobsSchema.methods.print = function print() {
	const text = this.name ? `printing... ${this.name}` : "doesn't exsist";
	console.log(text);
};

const jobs = mongoose.model("jobs", jobsSchema);

module.exports = jobs;
