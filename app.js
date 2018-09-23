var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/work", function(req, res){
    res.render("work");
});

app.get("/programs", function(req, res){
    res.render("programs");
});

app.get("/donate", function(req, res){
    res.render("donate");
});

app.get("/partner", function(req, res){
    res.render("partner");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});