(function(){

var urls = [
    "Images/Background.jpg",
	"Images/Window.png",
	"Images/WindowCaption.png",
	"Images/EdgeShadowTop.png",
	"Images/EdgeShadowLeft.png",
	"Images/EdgeShadowRight.png",
	"Images/FilmLeft.png",
	"Images/FilmRight.png",
	"Images/FilmMiddle.png",
	"Images/DoodleLeft.png",
	"Images/DoodleRight.png",
	"Images/ContactsTop.png",
	"Images/WindowHighlighted.png"
];

var images = [];

for (var i = 0; i < urls.length; i++) {
	var image = new Image();
	image.src = urls[i];
	images.push(image);
}


})();

