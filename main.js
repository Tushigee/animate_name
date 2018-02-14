var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Eny";
var bubbleShape = "circle"; // or circle
var letterColors = [red, green, purple];

drawName('myCanvas', myName, letterColors);

bounceBubbles();

var current_i = -1;
var canvas1_words = ['Happy', 'Be', 'Always'];
var canvas2_words_web = ['Valentines!', 'Strong', 'Smile'];
var canvas2_words_mob = ['V-Day!', 'Strong', 'Smile'];

function alert_b() {
    current_i = (current_i + 1) % canvas1_words.length;
	console.log('Updated to', current_i);
    drawName('myCanvas1', canvas1_words[current_i], letterColors);
	if (mobileCheck()) {
		drawName('myCanvas2', canvas2_words_mob[current_i], letterColors);	
	} else {
		drawName('myCanvas2', canvas2_words_web[current_i], letterColors);	
	}
	
}

alert_b();





