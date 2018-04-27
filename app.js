
var express = require("express");
var app = express();

var PORT = 8080;
app.use(express.static("views"));

// "/" is the root route, this will show the same thing everytime.
app.get("/", function(req, res){
    // res.render("this would be the file that has all the css and html in it");
    res.render("home.ejs");
    // res.send("<h1>Welcome to the home page</h1>");
});
// Create a new route, add to localhost:8080/fallinlovewith/express
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // send back the contents of a file with res.render
    res.render("love.ejs", {thingVar: thing});
});

app.listen(PORT, function(){
    console.log("Server is listening");
});