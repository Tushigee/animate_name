var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Eny";
var bubbleShape = "circle"; // or circle
var letterColors = [red, green, purple];

drawName('myCanvas', myName, letterColors);
drawName('myCanvas1', 'Happy', letterColors);
if (mobileCheck()) {
	drawName('myCanvas2', 'V-Day!', letterColors);	
} else {
	drawName('myCanvas2', 'Valentines!', letterColors);	
}

bounceBubbles();



