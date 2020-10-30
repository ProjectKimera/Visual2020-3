let Angulo, Velocidad;

function setup(){
	createCanvas(500,500);
	noStroke();
	
	Angulo = 0;
}


function draw(){
	background(0);
	Velocidad = map(200, 0, width, 0, 0.05, true);
	
	push();
	rectMode(CENTER);
	translate(width/2,height/2);
	rotate(Angulo);
	fill(255, 255, 255);
	rect(0,0,300,300);
	pop();
	
	if(!(keyIsPressed&&key=='v')){
		fill(153, 6, 33);
		rect(0,0,250,250);
		rect(0,height-200,200,height);
		rect(width-200,height-200,width,height);
		rect(width-200,0,width,200);
	}
	
	Angulo+=Velocidad;
	
	
}