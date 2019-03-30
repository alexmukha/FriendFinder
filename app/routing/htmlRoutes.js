var path = require("path");

var survey = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// fallback use route for homepage
	app.use("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};

module.exports = survey;