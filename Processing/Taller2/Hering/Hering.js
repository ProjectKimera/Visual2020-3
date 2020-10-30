
function setup() {
	createCanvas(300, 500);
}

function draw() {
	background(255);

	strokeWeight(3);
	stroke(202,0,27);
	line(100, 0, 100, height);
	line(200, 0, 200, height);

	strokeWeight(1);
	stroke(0);
	translate(width / 2, height / 2);
	if (!mouseIsPressed) {
		const lines = 25;
		const rad = 300;
		const thetaStep = PI / (lines + 1);
		for (var i = 1; i <= lines; i++) {
			line(rad * sin(i * thetaStep), rad * cos(i * thetaStep), -rad * sin(i * thetaStep), -rad * cos(i * thetaStep));
		}
	}
}