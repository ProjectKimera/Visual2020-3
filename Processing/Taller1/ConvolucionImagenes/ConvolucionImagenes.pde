PImage img;
PGraphics con;

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

String imageName="edge.jpg";

void setup() {
  //se carga la imagen y se crea el graphic para modificar la imagen original
  size(555, 183);
  img = loadImage(imageName);
  con=createGraphics(img.width, img.height);
}

void draw() {

  con.beginDraw();

  img.loadPixels();
  con.loadPixels();

  //se procesa pixel por pixel en x & y de la imagen original
  for (int x=0; x<img.width; x++) {
    for (int y=0; y<img.height; y++) {

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
          int loc = xloc + img.width*yloc;

          //nos aseguramos de no alejarnos de la imagen con constrain
          loc = constrain(loc, 0, img.pixels.length-1);
          
          //se multiplica el valor de la coordenada de cada tono por el punto de la matriz
          rtotal += (red(img.pixels[loc]) * mask[i][j]);
          gtotal += (green(img.pixels[loc]) * mask[i][j]);
          btotal += (blue(img.pixels[loc]) * mask[i][j]);
        }
      }
      
      rtotal = constrain(rtotal, 0, 255);
      gtotal = constrain(gtotal, 0, 255);
      btotal = constrain(btotal, 0, 255);

      int loc = x + y*img.width;
      
      //se ubica el nuevo pixel ya convolucionado en el Graphic
      con.pixels[loc]=color(rtotal, gtotal, btotal);
    }
  }

  //Se actualizan todos los pixeles ya convolucionados
  con.updatePixels();
  con.endDraw();
  //Se grafican la imagen original y la imagen convolucionada
  image(img, 0, 0);
  image(con, width/2, 0);
}
