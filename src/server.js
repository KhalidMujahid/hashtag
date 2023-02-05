require("dotenv").config()

const express = require("express");
// const db = require("../config/database.js");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const { pageNotFound,errorHandler } = require("../middlewares/errorHandler");

const app = express();

app.use(express.json());

// session 
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: process.env.SECRET_KEY
}))

app.disable("x-powered-by");

// logger
// app.use(morgan("tiny"));

// cookie-parser
app.use(cookieParser());

// template engine EJS
app.set("view engine","ejs");

// static
app.use(express.static(path.join(__dirname,"../","public")))

// routes
app.use("/", require("../routes/router.routes"));


// page not found handler
app.use(pageNotFound);

// error handler
app.use(errorHandler);

module.exports = app;
