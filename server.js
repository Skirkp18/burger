// SEVER FILE FOR BURGER APP
// =============================


// NPM REQUIREMENTS
const express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static("app"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("Listening on port: ", PORT);
  });