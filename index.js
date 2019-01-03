'use strict'
// Imports
var express = require("express");
var mysql = require('mysql');

// The express-server
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

// Connection to the MySQL server
// TODO: Read this from config file
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tijdloze"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Using Promises to perform db queries
function dbQuery(formatString, args) {
  return new Promise( (resolve, reject) => {
    db.query(formatString, args, (err, res) => {
      if (err) {
        return reject( err );
      }
      resolve( res );
    });
  });
}

// Artists endpoint
app.get("/artists", (req, res) => {
  queryArtists()
    .then(json => {
      res.json(json);
    });
});

// TODO: Add filters as arguments
function queryArtists() {
  return dbQuery("SELECT * FROM artiest", [])
    .then(res => {
      return res;
    });
}
