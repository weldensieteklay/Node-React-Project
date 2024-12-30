const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
//const connectDB = require("./config/DB");
const userModel = require("./model/userModel");

const userRoutes = require("./routes/routes");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(userRoutes);
app.use(userModel);
//connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Listening port ${PORT}`);
});

module.exports = app;
