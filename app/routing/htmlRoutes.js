app.get("./public/home", function(req, res) {
  // res.send("Welcome to the Friend finding page!")
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("./public/survey", function(req, res) {
  // res.send("Welcome to the Friend finding page!")
  res.sendFile(path.join(__dirname, "survey.html"));
});

