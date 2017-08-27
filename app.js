var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/assets'));


/********* ROUTES *********/

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/projects", function(req, res) {
	res.render("projects");
})

/********* END ROUTES *********/


app.listen("3000", function() {
    console.log("PiB Site on 3000");
});