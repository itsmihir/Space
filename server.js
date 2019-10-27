var express = require("express");
var app = express();
var mongooes = require("mongoose");
var bodyParser = require("body-parser");
var route = require("route");

const auth = require("./api/auth");
app.use("/api/auth",auth);

var PORT = process.env.PORT || 8080;


//mongodb configration
const db=require('./setup/myurl.js').mongoURL;
mongooes
    .connect(db)
    .then(()=>console.log("Mongodb connected successfully"))
    .catch( err=> console.log(err))



app.listen(PORT,()=>console.log(`server is running at port ${PORT}`));