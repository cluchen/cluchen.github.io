var diameter; 
var angle = 0;

function setup() {
  var myCanvas = createCanvas();
  createCanvas(800, 250);
  diameter = height - 20;
  noStroke();
  fill('#DCDCDC');
  myCanvas.parent(mySketch); 
}

function draw() {
  
  background('#F9F9F9');

  var d1 = 10 + (sin(angle) * diameter/2) + diameter/2;
  var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2;
  var d3 = 10 + (sin(angle + PI) * diameter/2) + diameter/2;
  
  ellipse(0, height/2, d1, d1);
  ellipse(width/2, height/2, d2, d2);
  ellipse(width, height/2, d3, d3);
  
  angle += 0.02;
}