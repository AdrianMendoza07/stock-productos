var express = require("express");
var mysql = require("mysql");
var env = require("dotenv").config();

var app = express();

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda_de_ropa",
});

conexion.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("all is fine");
  }
});

app.get("/", function (req, res) {
  res.send("App started");
});

const port = process.env.port;
app.listen(port, function () {
  console.log("Server running?, Port number is:" + port);
});
