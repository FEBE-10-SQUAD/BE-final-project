const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	nama: String,
	kota: String,
	alamat: String,
	tanggal_lahir: Date,
	no_handphone: Number,
	about_me: String,
	bookmark: Array,
	document: String,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
