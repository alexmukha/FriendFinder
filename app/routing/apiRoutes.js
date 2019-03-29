var friends = require("../data/friends");

var apiMain = function(app) {
  // Return all friends from friends.js app
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Get user info
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default variables
    var fIndex = 0;
    var minDiff = 40;

    // Loop through friend list and match scores
    for(var i = 0; i < friends.length; i++) {
      var totalDiff = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDiff += difference;
      }

      if(totalDiff < minDiff) {
        fIndex = i;
        minDiff = totalDiff;
      }
    }

    // Add matching user to friends array
    friends.push(user);

    // Display the best friend match
    res.json(friends[fIndex]);
  });
};
module.exports = apiMain;