const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/final-project-backend";

const db = mongoose.connect(DB_URL);

module.exports = db;
