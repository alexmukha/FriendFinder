var path = require("path");

var survey = function(app) {
	// Route to start survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// Route to Home page
	app.use("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};

module.exports = survey;