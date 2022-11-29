require("dotenv").config();
const mongoose = require("mongoose");

const DB_URL = `mongodb://mongo:${process.env.DB_PASSWORD}@containers-us-west-138.railway.app:7440`;

const db = mongoose.connect(DB_URL);

module.exports = db;
