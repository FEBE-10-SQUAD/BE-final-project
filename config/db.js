const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/skilvul_final_project";

const db = mongoose.connect(DB_URL);

module.exports = db;
