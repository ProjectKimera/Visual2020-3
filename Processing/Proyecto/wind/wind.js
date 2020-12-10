let img;
let lat = 4.60971;
let lon = -74.08175;
let latC = 0;
let lonC = 0;
var zoom = 1;
let particle_positions = [];
let wind_vecs = [];
let system;

var table;
var wind_data;
function preload() {
  img = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiZGFhcmFxdWVtIiwiYSI6ImNraWh2dHI4MTAzazIyc21lOXU4NW15dHoifQ.gON30ey0Mf75A5RAS2spaQ');
  // otherdata = loadStrings('https://nomads.ncenoaa.gov/cgi-bin/filter_fnl.pl?file=gdas.t12z.pgrb2.1p00.anl&all_lev=on&leftlon=0&rightlon=360&toplat=90&bottomlat=-90&dir=%2Fgdas.20201209%2F12')
  table = loadTable('./erathquake.csv', 'csv', 'header');
  wind_data = loadJSON('./windData.json');
}

function setup() {
  createCanvas(1024, 512);
  wind_vel = createVector(2.91668 + 22.7333, 25.8067-22.7333);
  console.log(wind_data.u.messages[0][62].value);
  var cx =  getXCoords(lonC);
  var cy =  getYCoords(latC);
  
  for(var i = 0; i<180; i+=2){
    for(var j = 0; j<360; j+=4){
      var temp_x =  getXCoords(j) - cx;
      var temp_y =  getYCoords(90-i) - cy;
      let pos = createVector(temp_x, temp_y);
      particle_positions.push(pos);
      var w_x = wind_data.u.messages[0][62].value[i*360+j/2];
      var w_y = wind_data.v.messages[0][62].value[i*360+j];
      var temp_w_x =  getXCoords(w_x) - cx;
      var temp_w_y =  getYCoords(w_y) - cy;
      let w_vec = createVector(temp_w_x, temp_w_y);
      wind_vecs.push(w_vec);
    }
  }
  system = new ParticleSystem(particle_positions, wind_vecs);
  
  translate( width / 2, height /2);
  imageMode(CENTER);
  image(img, 0, 0); 
  

  //for (var r = 0; r < table.getRowCount(); r++) {
  //    var Elat = table.getString(r, 1);
  //    var Elon = table.getString(r, 2);
  //    var Emag = table.getString(r, 4);
  //    Emag =  pow(10, Emag)*5;
  //    Emag =  sqrt(Emag)*5;
  //    var MaxMag =  sqrt( pow(10, 10));
  //    var d =  map(Emag, 0, MaxMag, 0, 180);
  //    var x =  getXCoords(Elon) - cx;
  //    var y =  getYCoords(Elat) - cy;
  //    stroke(255, 0, 255);
  //    fill(255, 0, 255, 200);
  //    ellipse(x, y, d, d);
  //  }
  
}


function draw() {
  system.addParticle();
  system.run();
}

function getXCoords(vlon) {
  vlon = radians(vlon);
  var a = (256 / PI) * pow(2, zoom );
  var b = (vlon + PI);
  return a * b;
}

function getYCoords(vlat) {
  vlat = radians(vlat);
  var a = (256 / PI) * pow(2, zoom );
  var b = tan(PI / 4 + vlat / 2);
  var c = PI - log(b);
  return a * c;
}



// Una clase simple de partícula (Particle)
let Particle = function(position, velocity) {
  this.acceleration = createVector(0, 1);
  this.velocity = velocity.copy();
  this.position = position.copy();
  this.lifespan = 30.0;
  this.stroke_len = 2;
  
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Método para refrescar posición
Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
};

// Método para mostrar en lienzo
Particle.prototype.display = function() {
  stroke(255, 204, 0, this.lifespan);
  strokeWeight(1);
  fill(127, this.lifespan);
  var n_x = this.position.x + this.stroke_len;
  if(this.velocity.x < 0) {
    n_x = this.position.x - this.stroke_len;
  }
  var n_y = this.position.y + this.stroke_len;
  if(this.velocity.y < 0) {
    n_y = this.position.y - this.stroke_len;
  }
  line(this.position.x, this.position.y, n_x, n_y);
};

// ¿La partícula todavía es útil?
Particle.prototype.isDead = function() {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};
Particle.prototype.addForce = function(wind) {
  this.acceleration.add(wind);
};

let ParticleSystem = function(positions, w_positions) {
  this.positions = positions;
  this.w_positions = w_positions;
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  for (let i = this.positions.length-1; i >= 0; i--) {
    this.particles.push(new Particle(this.positions[i], this.w_positions[i]));
  }
  
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    p.addForce(this.w_positions[i]);
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
