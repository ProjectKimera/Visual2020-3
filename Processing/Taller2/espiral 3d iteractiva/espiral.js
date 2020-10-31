function optical (x, y, w, shrink, rotation, color0, color1) {
  var whichColor = true; // color0 or color1?
  
  // Setup how to draw
  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  
  // Move the point of origin
  translate(x, y);
  
  //keep drawing rectangle while
  //the width is greater than zero
  while (w > 0) {
    // Select color
    if (whichColor) {
      fill(color0);
    } else {
      fill(color1);
    }
    
    //Flip the color
    whichColor = !whichColor;
    
    //Draw rectangle
    rect(0, 0, w, w);
    
    //Rotate around the pont of origin
    rotate(rotation);
    
    //shrink the rectangle width
    w -= shrink;
  }
  
  pop();
}

function setup () {
  createCanvas(450, 450);
  var c0 = color(0);
  var c1 = color (255);
  optical(250, 250, 450, 20, 5, c0, c1);

}

function draw() {
	var c0 = color(0);
  var c1 = color (255);
	rotation = int(mouseX / width * 20)
	optical(225, 225, 450, 20, rotation, c0, c1);
}