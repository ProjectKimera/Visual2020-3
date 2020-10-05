
PImage img;
PImage img2;
int[] temp_0;
int[] temp_1;

void setup() {
  size(1180, 720);

  // Load an image from the data directory
  img = loadImage("ciudad.jpg");
  img2 = loadImage("ciudad.jpg");
  img2.resize(640, 350);
  img.resize(640, 350);
  image(img2, 0, 0);
  calculate();
}

void calculate(){
  //Se convierte la imagen a escala de grises para sacar el histograma con base del brillo
  grayScale();
  int[] hist = new int[256];
  // Calculate the histogram
  for (int i = 0; i < img.width; i++) {
    for (int j = 0; j < img.height; j++) {
      int bright = int(brightness(get(i, j)));
      hist[bright]++;
    }
  }

  // Find the largest value in the histogram
  int histMax = max(hist);

  stroke(255);
  // Draw half of the histogram (skip every second value)
  for (int i = 0; i < img.width; i += 2) {
    // Map i (from 0..img.width) to a location in the histogram (0..255)
    int which = int(map(i, 0, img.width, 0, 255));
    // Convert the histogram value to a location between 
    // the bottom and the top of the picture
    int y = int(map(hist[which], 0, histMax, img.height, 0));
    line(i, img.height, i, y);
  }
  
  //Se buscan los maximos locales para econtrar la cantidad de clases (segmentos)
  FindLocalMax(hist);
  int[] climbs = temp_0;
  int[] xclimbs = temp_1;
 
  //Con los maximos locales se encuentran las limites de las clases
  FindFrontiers(hist, xclimbs);
  int[] hills = temp_0;
  int[] xhills = temp_1;
  
  //Se crea un arreglo con 
  color[] color_clases = DrawHistClases(hist, xhills); 
  //Se pintan los pixeles del color a la clase que pertenece
  GetImgClases(xhills, color_clases); 
}

void grayScale() {
  img.loadPixels();
  for (int i = 0; i < img.pixels.length; i++) {
    color p = img.pixels[i];
    float r = red(p);
    float g = green(p);
    float b = blue(p);
    float nc = (r + g +b)/3.0;
    img.pixels[i] = color(nc);
  }
  updatePixels();
}

void FindFrontiers(int[] values, int[] maxindex) {
  int[] findex = new int[maxindex.length];
  int[] frontier = new int[maxindex.length];
  
  for (int i=0; i < maxindex.length; i++) {         
    findex[i] = 0;
    frontier[i] = 0;
  }
  findex[0] = 1;
  frontier[0] = values[0];
  for(int i=0; i < maxindex.length-1; i++){ 
    findex[i+1] = round(maxindex[i] + (maxindex[i+1] - maxindex[i])/2);
    frontier[i+1] = values[findex[i+1]];
  }
  findex[maxindex.length-1]= 256; 

  frontier[maxindex.length-1] = values[255];
  temp_0 = findex;
  temp_1 = frontier;
}

void FindLocalMax(int[] img_hist){
   int ant = img_hist[0];
   int sentido = 1;
   int cont = 0;
   IntList max_arr = new IntList();
   IntList in = new IntList();

   max_arr.append(0);
   in.append(0);
   for (int i=1; i < img_hist.length; i++){
     if(img_hist[i] != ant){
       if(ant > img_hist[i]){
         if(sentido == 1){
           max_arr.append(ant);
           in.append(i);
           cont = cont + 1;
           sentido = -1;
         }
       }else{
         sentido = 1;
       }
       ant = img_hist[i];
     }
   }
   int[] temp_max_arr = new int[max_arr.size()];
   int[] temp_in = new int[in.size()];
   for(int i=0; i < temp_max_arr.length; i++){
     temp_max_arr[i] = max_arr.get(i);
   }
   
   for(int i=0; i < temp_in.length; i++){
     temp_in[i] = in.get(i);
   }
   temp_0 = temp_max_arr;
   temp_1 = temp_in;
 }
 

 void GetImgClases(int[] pos_clases, int[] color_clases){
  PImage img_clases = createImage(img.width, img.height, RGB);
  img_clases.loadPixels();

  img.loadPixels();
  color pcolor = color_clases[0];
  for(int i = 0; i < img.pixels.length; i++) {
    for(int c=0; c < pos_clases.length-1; c++){
      int bright = int(brightness(img.pixels[i]));
      if(bright >= pos_clases[c] && bright < pos_clases[c+1]){
        pcolor = color_clases[c];
      }
      img_clases.pixels[i] = pcolor;
    }
  }
  img_clases.updatePixels();

  image(img_clases, 0, 360);
  
  int[] hist2 = new int[256];
  // Calculate the histogram
  for (int i = 0; i < img_clases.width; i++) {
    for (int j = 0; j < img_clases.height; j++) {
      int bright = int(brightness(get(i, j)));
      hist2[bright]++;
    }
  }

  // Find the largest value in the histogram
  int histMax2 = max(hist2);

  stroke(255);
  // Draw half of the histogram (skip every second value)
  for (int i = 0; i < img_clases.width; i += 2) {
    // Map i (from 0..img.width) to a location in the histogram (0..255)
    int which = int(map(i, 0, img_clases.width, 0, 255));
    // Convert the histogram value to a location between 
    // the bottom and the top of the picture
    int y = int(map(hist2[which], 0, histMax2, img_clases.height, 0));
    line(i, 358+img_clases.height, i, 358+y);
  }
}


color[] DrawHistClases(int[] counts, int[] xhills){
  int clases = xhills.length;
  color[] colors = new color[clases];

  for(int i=0; i < clases; i++){
    colors[i] = color(random(255), random(255), random(255));
  }

  return colors;  
}