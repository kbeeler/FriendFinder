//displays all information
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

  
// Create New reservations - takes in JSON input
app.post("/api/friends", function(req, res) {
	
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriends = req.body;
  console.log(newFriends);


  if(friends.length === true) {
  	friends.push(newFriends);
  	res.json(true);
  } else {
  	alert("Please complete the survey questions")
  	res.json(false);
  }

});