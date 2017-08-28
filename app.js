var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/assets'));

var projects = [
					{
						title: "Binary Clock",
						page: "binaryclock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						description: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus."
					},
					{
						title: "Programmable Heart",
						page: "programmableheart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						description: "In hac habitasse platea dictumst."
					},
					{
						title: "ATTiny Programmer",
						page: "attinyprogrammer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						description: "Suspendisse malesuada congue sodales."
					},
					{
						title: "Binary Clock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						description: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus."
					},
					{
						title: "Programmable Heart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						description: "In hac habitasse platea dictumst."
					},
					{
						title: "ATTiny Programmer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						description: "Suspendisse malesuada congue sodales."
					},
					{
						title: "Binary Clock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						description: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus."
					},
					{
						title: "Programmable Heart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						description: "In hac habitasse platea dictumst."
					},
					{
						title: "ATTiny Programmer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						description: "Suspendisse malesuada congue sodales."
					},
					{
						title: "Binary Clock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						description: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus."
					},
					{
						title: "Programmable Heart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						description: "In hac habitasse platea dictumst."
					},
					{
						title: "ATTiny Programmer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						description: "Suspendisse malesuada congue sodales."
					},
					{
						title: "Binary Clock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						description: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus."
					},
					{
						title: "Programmable Heart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						description: "In hac habitasse platea dictumst."
					},
					{
						title: "ATTiny Programmer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						description: "Suspendisse malesuada congue sodales."
					},
					{
						title: "Binary Clock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						description: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus."
					},
					{
						title: "Programmable Heart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						description: "In hac habitasse platea dictumst."
					},
					{
						title: "ATTiny Programmer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						description: "Suspendisse malesuada congue sodales."
					}
				];

/********* ROUTES *********/

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/projects", function(req, res) {
	res.render("projects", {projects: projects});
});

app.get("/projects/:page", function(req, res) {
	res.render("project_details", {project: })
})

app.get("/getinvolved", function(req, res) {
	res.render("getinvolved");
});

/********* END ROUTES *********/


app.listen("3000", function() {
    console.log("PiB Site on 3000");
});