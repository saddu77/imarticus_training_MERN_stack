var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// middleware
app.use("/api", function(req,res,next){
    console.log("Request recieved - /api at:" + Date.now());
    next();
});

app.post("/api", function(req,res){
    res.send({email:req.body.email,password:req.body.password});
});
app.listen(5000);
