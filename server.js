var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var route = require("route");

const auth = require("./api/auth");
app.use("/api/auth",auth);

var PORT = process.env.PORT || 8080;



app.listen(PORT,()=>console.log(`server is running at port ${PORT}`));