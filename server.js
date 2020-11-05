// DEPENDENCIES
var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// STATIC FILES
app.use(express.static("public"));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HANDLEBARS
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// REQUIRE CONNECTION TO DATABASE
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// START SERVER
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});