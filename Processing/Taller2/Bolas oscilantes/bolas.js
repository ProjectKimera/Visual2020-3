let size = 600;
let circleSize = 550;
let numSteps = 200;
let l;
let angleMax = 5;
let numBalls = 10;
let ballSize = 40;
let balls = [];
var showLine = 1;

class OscillatingBall {
	constructor(angle, length, position, speed) {
		this.angle = angle;
		this.length = length;
		this.position = position % length; // position always inside length
		this.speed = speed;
	}
	
	move() {
		this.position += this.speed;
		
		if (this.position > this.length) {
			this.position = this.length;
			this.speed = -1 * this.speed;
		} else
			if (this.position < 0) {
			this.position = 0;
			this.speed = -1 * this.speed;
		}
	}
	
	draw() {
		push();
		rotate(this.angle);
		translate(-this.length/2, 0)
		strokeWeight(1);
		stroke(0);
		line(0, 0, this.length, 0);
		stroke(255);
		fill(255);
		ellipse(this.position, 0, ballSize, ballSize);
		pop();
	}
	
	drawBall() {
		push();
		rotate(this.angle);
		translate(-this.length/2, 0)
		stroke(250);
		fill(250);
		ellipse(this.position, 0, ballSize, ballSize);
		pop();
	}
	
	drawLine() {
		push();
		rotate(this.angle);
		translate(-this.length/2, 0)
		strokeWeight(1);
		stroke(0);
		line(0, 0, this.length, 0);
		pop();
	}
	
}
				
function setup() {
	createCanvas(size, size);
	let angleStep = PI / numBalls;
	let positionStep = circleSize / numBalls;
	let speed = circleSize / numSteps;
	l = circleSize / (2*sin(angleMax));
	for (let i=0, angle=0, pos=0; i<numBalls; i++, angle+=angleStep, pos+=positionStep) {
		balls[i] = new OscillatingBall(angle, circleSize, pos, speed);
	}
}

function draw() {
	translate(width/2, height/2);
	background(0);
	noStroke();
	fill(80);
	ellipse(0, 0, circleSize, circleSize);
	for (let i=0; i<numBalls; i++) {
		balls[i].move();
		if (showLine == 1){
			balls[i].drawLine();
		}
	}
	for (let i=0; i<numBalls; i++) {
		balls[i].drawBall();
	}
}

function mousePressed() {
    	showLine *= -1;
}