var aString = 'Brave Sir Robin ran away. Bravely ran away away. When danger reared it’s ugly head, he bravely turned his tail and fled. Brave Sir Robin turned about and gallantly he chickened out…';
var sWidth = 0;
var startPos = 0;
var yPos = 0;

function setup() {
  createCanvas(window.innerWidth, 150);
  textFont( "Titillium Web", 120 );

  sWidth = textWidth(aString) * 1.05;
  startPos = width + 100;
  yPos = startPos;
}

function draw() {
  background(255);
  yPos = yPos - 1;
  if (yPos < 0 - sWidth) {
    yPos = startPos;
  }
  text( aString, yPos, 0, sWidth, 150 );
  fill(0);
}
