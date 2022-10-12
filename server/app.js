var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
const port = 3000;
const router = require("./routes/userRoute");

// create express app
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

//router
app.use(router);

// define a simple route
app.get("/", function (req, res) {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
  });
});

// listen for requests
app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
