function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
 
    this.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
}

function mobileCheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
 
function PointCollection() {
    this.mousePos = new Vector(0, 0);
    this.pointCollectionX = 0;
    this.pointCollectionY = 0;
    this.points = [];
 
    this.update = function () {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
 
            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = (dx * dx) + (dy * dy);
            var d = Math.sqrt(dd);
 
            point.targetPos.x = d < mouse_radius ? point.curPos.x - dx : point.originalPos.x;
            point.targetPos.y = d < mouse_radius ? point.curPos.y - dy : point.originalPos.y;
 
            point.update();
        }
    };
 
    this.shake = function () {
        var randomNum = Math.floor(Math.random() * 5) - 2;
 
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = (dx * dx) + (dy * dy);
            var d = Math.sqrt(dd);
            if (d < 50) {
                this.pointCollectionX = Math.floor(Math.random() * 5) - 2;
                this.pointCollectionY = Math.floor(Math.random() * 5) - 2;
            }
            point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY);
        }
    };
 
    this.draw = function (bubbleShape, reset) {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
 
            if (point === null)
                continue;
 
            if (window.reset) {
                this.pointCollectionX = 0;
                this.pointCollectionY = 0;
                this.mousePos = new Vector(0, 0);
            }
            
            point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY, reset);
        }
    };
 
    this.reset = function (bubbleShape) {};
}
 
function Point(x, y, z, size, color) {
    this.curPos = new Vector(x, y, z);
    this.color = color;
 
    this.friction = document.Friction;
    this.rotationForce = document.rotationForce;
    this.springStrength = 0.1;
 
    this.originalPos = new Vector(x, y, z);
    this.radius = size;
    this.size = size;
    this.targetPos = new Vector(x, y, z);
    this.velocity = new Vector(0.0, 0.0, 0.0);
 
    this.update = function () {
        var dx = this.targetPos.x - this.curPos.x;
        var dy = this.targetPos.y - this.curPos.y;
        // Orthogonal vector is [-dy,dx]
        var ax = dx * this.springStrength - this.rotationForce * dy;
        var ay = dy * this.springStrength + this.rotationForce * dx;
 
        this.velocity.x += ax;
        this.velocity.x *= this.friction;
        this.curPos.x += this.velocity.x;
 
        this.velocity.y += ay;
        this.velocity.y *= this.friction;
        this.curPos.y += this.velocity.y;
 
        var dox = this.originalPos.x - this.curPos.x;
        var doy = this.originalPos.y - this.curPos.y;
        var dd = (dox * dox) + (doy * doy);
        var d = Math.sqrt(dd);
 
        this.targetPos.z = d / 100 + 1;
        var dz = this.targetPos.z - this.curPos.z;
        var az = dz * this.springStrength;
        this.velocity.z += az;
        this.velocity.z *= this.friction;
        this.curPos.z += this.velocity.z;
 
        this.radius = this.size * this.curPos.z;
        if (this.radius < 1) this.radius = 1;
    };
 
    this.draw = function (bubbleShape, dx, dy) {
        ctx.fillStyle = this.color;
        if (bubbleShape == "square") {
            ctx.beginPath();
            ctx.fillRect(this.curPos.x + dx, this.curPos.y + dy, this.radius * 1.5, this.radius * 1.5);
        } else {
            ctx.beginPath();
            ctx.arc(this.curPos.x + dx, this.curPos.y + dy, this.radius, 0, Math.PI * 2, true);
            ctx.fill();
        }
    };
}
 
function makeColor(hslList, fade) {
    var hue = hslList[0] /*- 17.0 * fade / 1000.0*/ ;
    var sat = hslList[1] /*+ 81.0 * fade / 1000.0*/ ;
    var lgt = hslList[2] /*+ 58.0 * fade / 1000.0*/ ;
    return "hsl(" + hue + "," + sat + "%," + lgt + "%)";
}
 
function phraseToHex(phrase) {
    var hexphrase = "";
    for (var i = 0; i < phrase.length; i++) {
        hexphrase += phrase.charCodeAt(i).toString(16);
    }
    return hexphrase;
}
 
function initEventListeners() {
    $(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);
    
    canvas.bind('touchmove',function(e){
      e.preventDefault();
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      
      onTouchMove(e);

      console.log(touch.pageY+' '+touch.pageX);
    });

    // canvas.ontouchmove = function (e) {
    //     e.preventDefault();
    //     onTouchMove(e);
    // };
 
    canvas.ontouchstart = function (e) {
        e.preventDefault();
    };
}
 
function updateCanvasDimensions() {
    canvas.attr({
        height: $( window ).height()/3,
        width: $( window ).width()
    });
    // canvasWidth = canvas.width();
    // canvasHeight = canvas.height();
    canvasWidth = $( window ).width();
    canvasHeight = $( window ).height()/3;

    draw(false);
    console.log('Dimension update');
}
 
function onMove(e) {
    for (i in pointCollections) {
        canvas = $("#" + canvas_names[i]);
        pointCollection = pointCollections[i];

        if (pointCollection) {
            pointCollection.mousePos.set(e.pageX - canvas.offset().left, e.pageY - canvas.offset().top);
        }
    }
        console.log('Mouse is moving');
}
 
function onTouchMove(e) {
    e.preventDefault();
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    for (i in pointCollections) {
        canvas = $("#" + canvas_names[i]);
        pointCollection = pointCollections[i];

        if (pointCollection) {
            pointCollection.mousePos.set(touch.pageX - canvas.offset().left, touch.pageY - canvas.offset().top);
        }
    }
    console.log('Touch move detected');
}
 
function bounceName() {
    shake();
    setTimeout(bounceName, 30);
}
 
function bounceBubbles() {
    draw();
    update();
    setTimeout(bounceBubbles, 50);
}
 
function draw(reset) {
    for (i in pointCollections) {
        canvas = $("#" + canvas_names[i]);
        pointCollection = pointCollections[i];
        var tmpCanvas = canvas.get(0);
     
        if (tmpCanvas.getContext === null) {
            return;
        }
     
        ctx = tmpCanvas.getContext('2d');
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
     
        bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : "circle";
     
        if (pointCollection) {
            pointCollection.draw(bubbleShape, reset);
        }
    }
}
 
function shake() {
    var tmpCanvas = canvas.get(0);
 
    if (tmpCanvas.getContext === null) {
        return;
    }
 
    ctx = tmpCanvas.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
 
    bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : "circle";
 
    if (pointCollection) {
        pointCollection.shake(bubbleShape);
    }
}
 
function update() {
    // if (pointCollection)
    //     pointCollection.update();
    for (i in pointCollections) {
        canvas = $("#" + canvas_names[i]);
        pointCollection = pointCollections[i];
        pointCollection.update()
    }
}
 
function drawName(canvas_name, name, letterColors) {
    canvas_names.push(canvas_name)
    canvas = $("#" + canvas_name);
    updateCanvasDimensions();
    var g = [];
    var offset = 0;
 
    function addLetter(cc_hex, ix, letterCols) {
        if (typeof letterCols !== 'undefined') {
            if (Object.prototype.toString.call(letterCols) === '[object Array]' && Object.prototype.toString.call(letterCols[0]) === '[object Array]') {
                letterColors = letterCols;
            }
            if (Object.prototype.toString.call(letterCols) === '[object Array]' && typeof letterCols[0] === "number") {
                letterColors = [letterCols];
            }
        } else {
            // if undefined set black
            letterColors = [[0, 0, 27]];
        }
 
        if (document.alphabet.hasOwnProperty(cc_hex)) {
            var chr_data = document.alphabet[cc_hex].P;
            var bc = letterColors[ix % letterColors.length];
 
            for (var i = 0; i < chr_data.length; ++i) {
                point = chr_data[i];
 
                g.push(new Point(point[0] + offset,
                    point[1],
                    0.0,
                    point[2],
                    makeColor(bc, point[3])));
            }
            offset += document.alphabet[cc_hex].W;
        }
    }
 
    var hexphrase = phraseToHex(name);
 
    var col_ix = -1;
    for (var i = 0; i < hexphrase.length; i += 2) {
        var cc_hex = "A" + hexphrase.charAt(i) + hexphrase.charAt(i + 1);
        if (cc_hex != "A20") {
            col_ix++;
        }
        addLetter(cc_hex, col_ix, letterColors);
    }
 
    for (var j = 0; j < g.length; j++) {
        g[j].curPos.x = (canvasWidth / 2 - offset / 2) + g[j].curPos.x;
        g[j].curPos.y = (canvasHeight / 2 - 105) + g[j].curPos.y;
        g[j].originalPos.x = (canvasWidth / 2 - offset / 2) + g[j].originalPos.x;
        g[j].originalPos.y = (canvasHeight / 2 - 105) + g[j].originalPos.y;
    }
    
    pointCollection = new PointCollection();
    pointCollection.points = g;
    
    pointCollections.push(pointCollection);
    initEventListeners();
}
 
window.reset = false;
 
$(window).mouseleave(function () {
    window.reset = true;
});
 
$(window).mouseenter(function () {
    window.reset = false;
});
 
var canvas = $("#myCanvas");
var canvasHeight = $( window ).height();
var canvasWidth = $( window ).width();
var ctx;
var pointCollection;

// Battushig added
var canvas_names = [];
var pointCollections = [];
var scales = []

var mouse_radius = 50;
 
document.rotationForce = 0.01;
document.Friction = 0.85;

var white = [0, 0, 100];
var black = [0, 0, 27];
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
 
setTimeout(updateCanvasDimensions, 1000);