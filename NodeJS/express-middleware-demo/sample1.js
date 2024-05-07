var express = require("express");
var app = express();
// middleware
app.use("/api", function(req,res,next){
    console.log("Request recieved - /api at:" + Date.now());
    next();
});

app.get("/api", function(req,res){
    res.send("Hello !!! from /api");
})

app.listen(5000);