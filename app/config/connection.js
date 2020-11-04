var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8000,
    user: "root",
    password: "G@rtail181993",
    database: "burgers_db"
  });

  connection.connect(function(err) {
      if (err) {
          console.log(err.stack);
          return;
      }
      
      console.log("Connected id = " + connection.threadId);
  });

module.exports = connection;