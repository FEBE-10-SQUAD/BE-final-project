const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobsSchema = new Schema(
	{
		category: String,
		name: String,
		company: String,
		employee: String,
		experience: String,
		salary: String,
		image: String,
		description: String,
		userId: {
			type: Object
		}
	},
	{
		timestamps: true
	}
);

jobsSchema.methods.print = function print() {
	const text = this.name ? `printing... ${this.name}` : "doesn't exsist";
	console.log(text);
};

const jobs = mongoose.model("jobs", jobsSchema);

module.exports = jobs;
