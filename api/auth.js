var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://127.0.0.1:5501"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


router.use(bodyParser.urlencoded({
    extended: true
  }));


//@route /api/auth/login
//@desc to get username and password
//PUBLIC

router.post('/login',(req,res)=>
{
    console.log(req.body);
})


//@route /api/auth/register
//@desc to get username and password
//PUBLIC

router.post('/register',(req,res)=>
{
  console.log(req.body);
  res.send("ok");
})


module.exports = router;