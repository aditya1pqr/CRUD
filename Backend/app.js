require("dotenv").config()
const connectToDB = require("./config/db.js")
const route = require("./routes/route.js")
const express = require("express");
const app = express();
connectToDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/" , route)

module.exports = app 