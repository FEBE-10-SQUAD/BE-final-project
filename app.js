require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/db");

const allRoutes = require("./routes");
const middlewares = [express.json()];

const PORT = process.env.PORT || 8080;

db.then(() => {
	console.log("database terkoneksi");
}).catch((err) => {
	console.log(err);
});

app.use(middlewares, allRoutes);

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
