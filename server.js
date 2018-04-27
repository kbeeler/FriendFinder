var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");
//sets up the express App
//=========================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
//to populate req. body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

