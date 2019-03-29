var express = require("express");
var path = require("path");

// Turn express into the app
var app = express();

// Specify PORT
var PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Console log status
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});