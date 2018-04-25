var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const htmlRoutes = require("/app/routing/htmlRoutes.js");
const apiRoutes = require("/app/routing/apiRoutes.js");
//sets up the express App
//=========================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
//to populate req. body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [
	{
	  "name":"Dennyela Reever",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	}
]


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

