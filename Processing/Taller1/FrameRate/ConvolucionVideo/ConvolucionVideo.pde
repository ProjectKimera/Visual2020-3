import processing.video.*;

PImage con;
Movie myMovie;
//matriz que aplicara el filtro sobre la imagen

float g=1.0/16.0;
int masksize=3;

float[][] EdgeDetection = { { -1, -1, -1 },
                          { -1, 8, -1 },
                          { -1, -1, -1 } };
                          
float[][] GaussianBlur = { { g, 2*g, g },
                          { 2*g, 4*g, 2*g },
                          { g, 2*g, g } };
                        
float[][] Sharpen = { { 0, -1, 0 },
                    { -1, 5, -1 },
                    { 0, -1, 0 } };
                    
float[][] Emboss = { { -2, -1, 0 },
                    { -1, 1, 1 },
                    { 0, 1, 2 } };
                    
float[][] HighDefinition =  { { 0, -1, 0 },
                            { -1, 5, -1 },
                            { 0, -1, 0 } };
                            
float[][] SobelL =  { { 1, 0, -1 },
                   { 2, 0, -2 },
                   { 1, 0, -1 } };
                          
float[][] mask=EdgeDetection;


void setup() {
  //se carga la imagen y se crea el graphic para modificar la imagen original
  size(1240, 400);
  
  
  myMovie = new Movie(this, "video.mov");
  myMovie.frameRate(frameCount);
  myMovie.loop();
}

void convolucion(Movie OriginalVid) {

  con=createImage(OriginalVid.width, OriginalVid.height, RGB);
  
  con.loadPixels();

  //se procesa pixel por pixel en x & y de la imagen original
  for (int x=0; x<OriginalVid.width; x++) {
    for (int y=0; y<OriginalVid.height; y++) {

      //inicializamos las variables de rojo/verde/azul
      float rtotal = 0.0;
      float gtotal = 0.0;
      float btotal = 0.0;
      
      //se procesa el pixel por cada punto de la matiz filtro
      for (int i = 0; i < masksize; i++) {
        for (int j= 0; j < masksize; j++) {
          //se ubica el punto de interes
          int xloc = x+i-1;
          int yloc = y+j-1;
          int loc = xloc + OriginalVid.width*yloc;

          //nos aseguramos de no alejarnos de la imagen con constrain
          loc = constrain(loc, 0, OriginalVid.pixels.length-1);
          
          //se multiplica el valor de la coordenada de cada tono por el punto de la matriz
          rtotal += (red(OriginalVid.pixels[loc]) * mask[i][j]);
          gtotal += (green(OriginalVid.pixels[loc]) * mask[i][j]);
          btotal += (blue(OriginalVid.pixels[loc]) * mask[i][j]);
        }
      }
      
      rtotal = constrain(rtotal, 0, 255);
      gtotal = constrain(gtotal, 0, 255);
      btotal = constrain(btotal, 0, 255);

      int loc = x + y*OriginalVid.width;
      
      //se ubica el nuevo pixel ya convolucionado en el Graphic
      con.pixels[loc]=color(rtotal, gtotal, btotal);
    }
  }

  //Se actualizan todos los pixeles ya convolucionados
  con.updatePixels();
  //Se grafican la imagen original y la imagen convolucionada
  image(con, width/2, 0);
}

void draw() {
  convolucion(myMovie);
  if (myMovie.available()) {
    myMovie.read();
  }
  image(myMovie, 0, 0);
}
