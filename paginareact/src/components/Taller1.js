import React from 'react';
import convid from '../vid/convid.mp4'
import frame from '../vid/frame.mp4'
import frameConv from '../vid/frameConv.mp4'
import lumavid from '../vid/luma.mp4'
import edge from '../img/edge.PNG'
import blur from '../img/blur.PNG'
import shar from '../img/shar.PNG'
import luma from '../img/luma1.PNG'
import luma1 from '../img/luma2.PNG'
import luma2 from '../img/luma3.PNG'
import or from '../img/or.jpg'
import seg from '../img/Histo.jpg'
import emboss from '../img/emboss.PNG'
import high from '../img/High.PNG'
import sobel from '../img/sobel.PNG'

function Taller1() {
    return(
        <div className="Taller1 container my-5" style={{color: "white"}}>
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        
                        <a className="nav-link btn-dark my-2" id="v-pills-gray-tab" data-toggle="pill" href="#v-pills-gray" role="tab" aria-controls="v-pills-gray" aria-selected="false">Escala de Grises</a>
                        <a className="nav-link btn-dark my-2" id="v-pills-conv-tab" data-toggle="pill" href="#v-pills-conv" role="tab" aria-controls="v-pills-conv" aria-selected="false">Mascaras de convolución</a>
                        <a className="nav-link btn-dark my-2" id="v-pills-seg-tab" data-toggle="pill" href="#v-pills-seg" role="tab" aria-controls="v-pills-seg" aria-selected="false">Segmentacion</a>
                        <a className="nav-link btn-dark my-2" id="v-pills-ef-tab" data-toggle="pill" href="#v-pills-ef" role="tab" aria-controls="v-pills-ef" aria-selected="false">Eficencia computacional</a>
                    </div>
                </div>
                <div className="col-9 px-5">
                    <div className="tab-content" id="v-pills-tabContent">

                    <div className="tab-pane fade show active" id="v-pills-gray" role="tabpanel" aria-labelledby="v-pills-gray-tab">
                        <div className="row my-2">
                            <div className="row my-2">
                                <video src={lumavid} className="img-fluid rounded" controls muted>
                                </video>
                            </div>
                            <p className="text-justify font-weight-bold row">
                            Para el filtro luma las señales de luminancia se separan de las señales RGB del sensor que representan una imagen. Se obtiene una función de transferencia a partir de las señales de luminancia. Con la función de transferencia, las señales RGB del sensor se ajustan para adaptar la luminancia de la imagen.  
                            </p>
                            <div className="row my-2">
                                <img src={luma} className="img-fluid rounded"/>
                            </div>
                            <div className="row my-2">
                                <img src={luma1} className="img-fluid rounded"/>
                            </div> 
                            <div className="row my-2">
                                <img src={luma2} className="img-fluid rounded"/>
                            </div>   
                        </div>
                    </div>

                    <div className="tab-pane fade" id="v-pills-conv" role="tabpanel" aria-labelledby="v-pills-conv-tab">
                        <div className="row my-2">
                            <video src={convid} className="img-fluid rounded" controls muted>
                            </video>
                        </div>
                        <div className="row my-2">
                            <p className="text-justify font-weight-bold row">
                            Para el uso de la convolución en imágenes y videos, pasamos cada uno de los píxeles del archivo original al filtro, el cual examina, sucesivamente cada píxel de la imagen, para cada uno de ellos se multiplica el valor de este píxel por el valor correspondiente del kernel, entonces se añade el resultado, y el píxel inicial se regula en este valor resultante final, esto nos permite aplicar mascaras a imágenes y videos, como Edge Detection, Gaussian Blur, Sharpern, Emboss, High Definition, Sobel Left. 
                            </p>
                        </div>
                        <div className="row my-2">
                            <h3 className="text-justify font-weight-bold">
                                Edge Detection
                            </h3>                            
                        </div>
                        <div className="row my-2">
                            <div className="col-sm-3 m-2">
                                <table className="table table-dark">
                                    <tbody>
                                    <tr>
                                        <td>-1</td>
                                        <td>-1</td>
                                        <td>-1</td>
                                    </tr>
                                    <tr>
                                        <td>-1</td>
                                        <td>8</td>
                                        <td>-1</td>
                                    </tr>
                                    <tr>
                                        <td>-1</td>
                                        <td>-1</td>
                                        <td>-1</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="col-sm-8 m-2">
                                <img src={edge} className="img-fluid rounded"/>
                            </div>                    
                        </div>
                        
                        <div className="row my-2">
                            <h3 className="text-justify font-weight-bold">
                                GaussianBlur
                            </h3>                            
                        </div>
                        <div className="row my-2">
                            <div className="col-sm-3 m-2">
                                <table className="table table-dark">
                                    <tbody>
                                    <tr>
                                        <td>g</td>
                                        <td>2g</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>2g</td>
                                        <td>4g</td>
                                        <td>2g</td>
                                    </tr>
                                    <tr>
                                        <td>g</td>
                                        <td>2g</td>
                                        <td>g</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="col-sm-8 m-2">
                                <img src={blur} className="img-fluid rounded"/>
                            </div>                    
                        </div>

                        <div className="row my-2">
                            <h3 className="text-justify font-weight-bold">
                                Sharpen
                            </h3>                            
                        </div>
                        <div className="row my-2">
                            <div className="col-sm-3 m-2">
                                <table className="table table-dark">
                                    <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>-1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>-1</td>
                                        <td>5</td>
                                        <td>-1</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>-1</td>
                                        <td>0</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="col-sm-8 m-2">
                                <img src={shar} className="img-fluid rounded"/>
                            </div>                    
                        </div>

                        <div className="row my-2">
                            <h3 className="text-justify font-weight-bold">
                                Emboss
                            </h3>                            
                        </div>
                        <div className="row my-2">
                            <div className="col-sm-3 m-2">
                                <table className="table table-dark">
                                    <tbody>
                                    <tr>
                                        <td>-2</td>
                                        <td>-1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>-1</td>
                                        <td>1</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>2</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="col-sm-8 m-2">
                                <img src={emboss} className="img-fluid rounded"/>
                            </div>                    
                        </div>

                        <div className="row my-2">
                            <h3 className="text-justify font-weight-bold">
                                High Definition
                            </h3>                            
                        </div>
                        <div className="row my-2">
                            <div className="col-sm-3 m-2">
                                <table className="table table-dark">
                                    <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>-1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>-1</td>
                                        <td>5</td>
                                        <td>-1</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>-1</td>
                                        <td>0</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="col-sm-8 m-2">
                                <img src={high} className="img-fluid rounded"/>
                            </div>                    
                        </div>

                        <div className="row my-2">
                            <h3 className="text-justify font-weight-bold">
                                SobelL
                            </h3>                            
                        </div>
                        <div className="row my-2">
                            <div className="col-sm-3 m-2">
                                <table className="table table-dark">
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>-1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>0</td>
                                        <td>-2</td>
                                    </tr>
                                    <tr>
                                        <td>-1</td>
                                        <td>0</td>
                                        <td>-1</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="col-sm-8 m-2">
                                <img src={sobel} className="img-fluid rounded"/>
                            </div>                    
                        </div>

                    </div>

                    <div className="tab-pane fade" id="v-pills-seg" role="tabpanel" aria-labelledby="v-pills-seg-tab">
                    <div className="row my-2">                        
                            <div className="row my-2">
                                <img src={or} className="img-fluid rounded"/>
                            </div>
                            <p className="text-justify font-weight-bold row">
                            Para realizar la segmentación inicialmente la imagen se transforma a escala de grises para obtener el histograma basado en el brillo de cada pixel, una vez que se obtiene el histograma se realiza la búsqueda de los segmentos, para esto se toma los máximos locales en el histograma, con estos valores se calculan las fronteras de los segmentos en el histograma y a cada segmento se le agrega un color aleatorio.
                            Después se toma el brillo de cada pixel de la imagen en escala de grises y se evalúa a que segmento pertenece y se pinta del color al que pertenece. 
                            </p>
                            <div className="row my-2">
                                <img src={seg} className="img-fluid rounded"/>
                            </div> 
                        </div>
                    </div>

                    <div className="tab-pane fade" id="v-pills-ef" role="tabpanel" aria-labelledby="v-pills-ef-tab">
                        <p className="text-justify font-weight-bold row">
                        Utilizando la variable del sistema frameRate se mide la velocidad de fotogramas aproximada de la ejecución y cada 500 milisegundos se hace una impresión en el boceto mostrando el valor de esa variable.
                        </p>
                        <div className="row my-2">
                            <h3 className="my-2">Framerate escala de grises</h3>
                            <video src={frame} className="img-fluid rounded" controls muted>
                            </video>
                        </div>
                        <div className="row my-2">
                            <h3 className="my-2">Framerate mascara de convolución</h3>
                            <video src={frameConv} className="img-fluid rounded" controls muted>
                            </video>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default Taller1;