
PImage lumaGrayscaleImg;
PImage img;
// Grayscale Luma y'601 for images

void setup() {
  //se carga la imagen y se crea el graphic para modificar la imagen original
  size(1252,939);
  img = loadImage("img1.jpg");
  
  lumaGrayscale(img);
}

void lumaGrayscale(PImage Img) {
  
  Img.loadPixels();
  
  int originalSize = Img.width * Img.height;
  lumaGrayscaleImg = createImage(Img.width, Img.height, RGB);

  for (int i = 0; i < originalSize; i++) {
    float pixelLumaAvg = 0;

    pixelLumaAvg = 
      red(Img.pixels[i]) * 0.299 + 
      green(Img.pixels[i]) * 0.587 + 
      blue(Img.pixels[i]) * 0.114;
  
      pixelLumaAvg=constrain(pixelLumaAvg,0,255);
      lumaGrayscaleImg.pixels[i] = color(pixelLumaAvg);
  }
  
  
    lumaGrayscaleImg.updatePixels();
    image(Img, 0, 0);
    image(lumaGrayscaleImg, width/2, 0);
}
