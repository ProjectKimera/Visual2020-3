
function pacMan(x, y, angle) {
	push();
	fill(0);
	translate(x, y);
	rectMode(CENTER);
	arc(x, y, 100, 100, 32 + angle, -32 + angle);
	pop();
}

function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
	noStroke();
}

function draw() {
	background(100, 40, 200);

	fill(0);

	stroke(0);
	strokeWeight (4);
	
	line( 143, 256, 100, 176);
	line( 190, 176, 100, 176);
	
	line ( 188, 341, 240, 433);
	line ( 287, 341,240, 433);
	
	line (376, 176, 333, 256); 
	line (376, 176, 286, 176);
	

	strokeWeight (1);

	if (!(keyIsPressed && key == 'k')) {
		pacMan(120, 50, 90);
		pacMan(50, 170, 329);
		pacMan(190, 170, 209);
	}else{
		pacMan(120, 50, 270);
		pacMan(50, 170, 509);
		pacMan(190, 170, 389);
	}

	
	fill(255, 0, 0);
	ellipse(240, 245, 3,3);


}
