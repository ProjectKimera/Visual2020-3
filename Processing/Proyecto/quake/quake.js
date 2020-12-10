let img;
let lat = 4.60971;
let lon = -74.08175;
let latC = 0;
let lonC = 0;
let system;
let zoom = 1;
var table;
function preload() {
  img = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiZGFhcmFxdWVtIiwiYSI6ImNraWh2dHI4MTAzazIyc21lOXU4NW15dHoifQ.gON30ey0Mf75A5RAS2spaQ');
  table = loadTable('./erathquake.csv', 'csv', 'header');
  
}

function setup() {
  createCanvas(1024, 512);
  var cx =  getXCoords(lonC);
  var cy =  getYCoords(latC);

  
  translate( width / 2, height /2);
  imageMode(CENTER);
  image(img, 0, 0); 

  for (var r = 0; r < table.getRowCount(); r++) {
      var Elat = table.getString(r, 1);
      var Elon = table.getString(r, 2);
      var Emag = table.getString(r, 4);
      Emag =  pow(10, Emag)*5;
      Emag =  sqrt(Emag)*5;
      var MaxMag =  sqrt( pow(10, 10));
      var d =  map(Emag, 0, MaxMag, 0, 180);
      var x =  getXCoords(Elon) - cx;
      var y =  getYCoords(Elat) - cy;
      stroke(255, 0, 255);
      fill(255, 0, 255, 200);
      ellipse(x, y, d, d);
    }
  
}


function draw() {

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
