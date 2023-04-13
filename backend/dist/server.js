"use strict";

var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var dotenv = require("dotenv").config();
var helmet = require('helmet');
var morgan = require('morgan');
var PORT = process.env.PORT;
var MONGO_URI = process.env.MONGO_URI;
var User = require("../Models/Users");
var userRoute = require("../Routes/user");
var Dashboard = require("../Routes/cards");
var app = express();

// middleware
app.use(express.json()); // Allows our API to parse json
app.use(cors()); // allow cross-origin resource sharing
app.use(helmet()); //Security (Adds HTTP Headers)
app.use(morgan('combined')); //Logger HTTP Request

app.use(function (req, res, next) {
  console.log(req.path, req.method);
  next();
});
mongoose.set("strictQuery", false);

// connecting to MongoDB Atlas database
mongoose.connect(MONGO_URI).then(function () {
  // listens for requests
  app.listen(PORT, function () {
    console.log("Connected to DB & Listening on port ".concat(PORT));
  });
})["catch"](function (error) {
  console.log(error);
});
app.use('/api/user', userRoute);
app.use('/api/cards', Dashboard);

// test connection
app.get("/", function (req, res) {
  // sends back json object string
  res.json({
    msg: "Welcome"
  });
});
app.get("/hello", function (req, res) {
  // sends back json object string
  res.json({
    msg: "Hello"
  });
});