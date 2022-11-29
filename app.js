require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

const allRoutes = require("./routes");
const middlewares = [express.json()];

const PORT = process.env.PORT || 8080;

db.then(() => {
	console.log("database terkoneksi");
}).catch((err) => {
	console.log(err);
});

app.use(middlewares, allRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
