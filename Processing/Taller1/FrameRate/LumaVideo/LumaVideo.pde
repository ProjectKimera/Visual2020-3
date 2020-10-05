import processing.video.*;

PImage lumaGrayscaleImg;
PFont f;
int timer;

Movie myMovie;
// Grayscale Luma y'601 for images

void setup() {
  //se carga la imagen y se crea el graphic para modificar la imagen original
  size(1240, 470);
  background(0, 0, 0);
  myMovie = new Movie(this, "video.mov");
  myMovie.frameRate(frameCount);
  myMovie.loop();
  f = createFont("Arial", 24, true); 
  textFont(f);
}

// Grayscale Luma y'601 for video
void lumaGrayscale(Movie originalVid) {
  lumaGrayscaleImg = createImage(originalVid.width, originalVid.height, RGB);

  for (int i = 0; i < originalVid.width; i++) {    
    for (int j = 0; j < originalVid.height; j++) {      
      // Calculate the 1D location from a 2D grid
      int pixelLocation = i + j * originalVid.width;      

      float r = red(originalVid.pixels[pixelLocation]) * 0.299;      
      float g = green(originalVid.pixels[pixelLocation]) * 0.587;      
      float b = blue(originalVid.pixels[pixelLocation]) * 0.114;         

      lumaGrayscaleImg.pixels[pixelLocation] = color(r + g + b);
    }
  }
  lumaGrayscaleImg.updatePixels();
  image(lumaGrayscaleImg, width/2, 0);
}

void draw() {
  lumaGrayscale(myMovie);
  if (myMovie.available()) {
    myMovie.read();
  }
  image(myMovie, 0, 0);
  
  if (millis() - timer >= 500) {
    fill(0,0,0);
    rect(100, myMovie.height + 10, 400, 30);
    fill(255,255,255);
    text("Frame Rate: " + frameRate, 100, myMovie.height + 30);
    timer = millis();
  }
}
