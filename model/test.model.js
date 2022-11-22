const mongoose = require("mongoose");
const { Schema } = mongoose;

const testSchema = new Schema({
	nama: String,
});

testSchema.methods.print = function print() {
	const text = this.name ? `printing... ${this.name}` : "doesn't exsist";
	console.log(text);
};

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
