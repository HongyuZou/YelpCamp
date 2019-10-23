var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// form
app.use(bodyParser.urlencoded({extended: true}));
// to leave ejs
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Salmon Creek", image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto"},
		{name: "Granite Hill", image: "https://specials-images.forbesimg.com/imageserve/960743598/960x0.jpg?fit=scale"},
		{name: "Mountain Goat's Rest", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/fef91bb3-1dff-444d-b0e5-d14db129ce1d_image2_0-main-tent.jpg"},
		{name: "Salmon Creek", image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto"},
		{name: "Granite Hill", image: "https://specials-images.forbesimg.com/imageserve/960743598/960x0.jpg?fit=scale"},
		{name: "Mountain Goat's Rest", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/fef91bb3-1dff-444d-b0e5-d14db129ce1d_image2_0-main-tent.jpg"}
	];

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

// handle form post request
app.post("/campgrounds", function(req, res) {
	// get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampGround = {name:name, image:image};
	campgrounds.push(newCampGround);
	
	// redirect back to campgrounds page
	res.redirect('/campgrounds');
})

app.get("/campgrounds/new", function(req, res) {
	res.render("new.ejs");
})

app.listen(8000, function() {
	console.log("Yelp camp server started at 8000");
});