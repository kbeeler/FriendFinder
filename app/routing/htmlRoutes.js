
module.exports = function(app) {
	
	app.get("./public/home", function(req, res) {
	  // res.send("Welcome to the Friend finding page!")
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("./public/survey", function(req, res) {
	  // res.send("Welcome to the Friend finding page!")
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});


};