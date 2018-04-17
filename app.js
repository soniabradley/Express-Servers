
var express = require("express");
var app = express();

var PORT = 8080;

// "/" is the root route
app.get("/", function(req, res){
    // res.render("this would be the file that has all the css and html in it");
    res.render("home.ejs");
    // res.send("<h1>Welcome to the home page</h1>");
});

app.listen(PORT, function(){
    console.log("Server is listening");
});