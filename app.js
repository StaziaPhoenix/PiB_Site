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
						hook: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio.",
						skillsLearned: ["PCB Design", "Arduino", "Embedded Chips", "Soldering", "C Programming"],
						sequence: ["attinyprogrammer", "programmableheart", "binaryclock", "powersupply"]
					},
					{
						title: "Programmable Heart",
						page: "programmableheart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						hook: "In hac habitasse platea dictumst.",
						descripticv-v=n: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."						
					},
					{
						title: "ATTiny Programmer",
						page: "attinyprogrammer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						hook: "Suspendisse malesuada congue sodales.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Binary Clock",
						page: "binaryclock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						hook: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Programmable Heart",
						page: "programmableheart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						hook: "In hac habitasse platea dictumst.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."						
					},
					{
						title: "ATTiny Programmer",
						page: "attinyprogrammer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						hook: "Suspendisse malesuada congue sodales.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Binary Clock",
						page: "binaryclock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						hook: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Programmable Heart",
						page: "programmableheart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						hook: "In hac habitasse platea dictumst.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."						
					},
					{
						title: "ATTiny Programmer",
						page: "attinyprogrammer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						hook: "Suspendisse malesuada congue sodales.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Binary Clock",
						page: "binaryclock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						hook: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Programmable Heart",
						page: "programmableheart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						hook: "In hac habitasse platea dictumst.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."						
					},
					{
						title: "ATTiny Programmer",
						page: "attinyprogrammer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						hook: "Suspendisse malesuada congue sodales.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Binary Clock",
						page: "binaryclock",
						mainImage: "/images/clockMain.JPG",
						images: ["/images/clock1.jpg", "/images/clock2.jpg"],
						hook: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
					},
					{
						title: "Programmable Heart",
						page: "programmableheart",
						mainImage: "/images/heartMain.jpg",
						images: ["/images/heart1.jpg"],
						hook: "In hac habitasse platea dictumst.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."						
					},
					{
						title: "ATTiny Programmer",
						page: "attinyprogrammer",
						mainImage: "/images/attinyMain.jpg",
						images: ["/images/attiny1.jpg"],
						hook: "Suspendisse malesuada congue sodales.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio."
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
	if (req.params.page == "binaryclock") {
		var proj = projects[0];
	}
	if (req.params.page == "programmableheart") {
		var proj = projects[1];
	}
	if (req.params.page == "attinyprogrammer") {
		var proj = projects[2];
	}
	res.render("project_details", {project: proj})
})

app.get("/getinvolved", function(req, res) {
	res.render("getinvolved");
});

/********* END ROUTES *********/


app.listen("3000", function() {
    console.log("PiB Site on 3000");
});