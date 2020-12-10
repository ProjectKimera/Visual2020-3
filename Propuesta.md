# Propuesta de profundización
## ¿Para qué sirven los mapas de viento?
Normalmente este tipo de información se encuentra en conceptos o formas que no son digeribles mediante el entendimiento de todas las personas, es por ello que estos fenómenos causados por el comportamiento del viento son ilustrados mediante mapas de viento, los cuales hacen mucho más fácil el entendimiento y la contextualización hacia personas que no podemos identificar inmediatamente los números o datos que se presentan normalmente como resultados de los análisis.
Estos mapas muestran varios tipos de conclusiones que nos puede proporcionar el viento, pero para el enfoque de nuestro proyecto, nos fijamos en los datos tales como la velocidad media del viento, con esto se ilustra los colores mostrados según la leyenda, además de la velocidad del viento en una altitud y zona específica, la dirección del viento se puede mostrar con líneas de corriente, por ejemplo, así como la presión del nivel del mar con isobares y otros. Se pueden presenciar las ráfagas de viento, las velocidades y detalles que puede obtener de esto.
## Objetivo
Para nuestro proyecto de profundización nuestro grupo decidió enfocarse en la visualización de datos, basándonos en datos sobre la velocidad del viento a nivel mundial. Nuestra idea principal es poder mostrar el movimiento de los vientos y la fuerza de estos, esto mediante el uso de WebGL y de las partículas de la imagen que resulta de procesar nuestro data set. Nos basamos en soluciones derivadas de [Cameron Beccario](https://earth.nullschool.net/) como la de [Vladimir Agafonkin](https://mapbox.github.io/webgl-wind/demo/).
Normalmente este tipo de visualizaciones globales funcionan en un canvas 2D, en este se generan partículas de posiciones aleatorias y luego se consulta los datos del viento el cual obtiene la velocidad de la partícula en dicha ubicación, se restablecen cierta cantidad de partículas nuevamente de forma aleatoria y finalmente se desvanece un poco la pantalla y se dibujan partículas recién colocadas al frente del canvas, esto como se suponía provoca un movimiento que simula el movimiento del viento en dichas regiones.
## Procesamiento de data
Para la realización de nuestro proyecto usamos un data set de datos abiertos sobre el clima, este toma un modelo global y se actualiza cada 6 horas, para nuestro proyecto únicamente usamos los datos que son subidos a las 0 horas, extraemos los datos del viento en 10 metros sobre el nivel del suelo, esto en un formato de latitudes y longitudes que más adelante nos sirve mediante un proceso de data el cual convierte todos estos datos en imágenes png que se exponen en nuestra visualización de mapa global.

La fuente de nuestros datos es el servicio NOMAD: [https://nomads.ncep.noaa.gov/](https://nomads.ncep.noaa.gov/), la cual contiene una gran cantidad de datos y filtros que pueden ser apropiadamente usados mediante un correcto uso de algoritmos y procesos de imagen.

![NOMADS](https://kuwago-files.s3.amazonaws.com/NOMAD.png)

Para la descarga de datos se ejecuta un enlace de datos que nos proporciona la página mediante el GRIB filter, este link se puede modificar dependiendo de las configuraciones que se necesiten en el momento, un ejemplo de este es el siguiente:

[https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_1p00.pl?file=gfs.t06z.pgrb2.1p00.f000&lev_10_m_above_ground=on&leftlon=0&rightlon=360&toplat=90&bottomlat=-90&dir=%2Fgfs.20201209%2F06](https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_1p00.pl?file=gfs.t06z.pgrb2.1p00.f000&lev_10_m_above_ground=on&leftlon=0&rightlon=360&toplat=90&bottomlat=-90&dir=%2Fgfs.20201209%2F06)

![GRIB Filter](https://kuwago-files.s3.amazonaws.com/GRIB.png)

Este enlace arroja datos en formato f000 los cuales son formateados en un JSON


![JSON](https://kuwago-files.s3.amazonaws.com/JSON.png)

Para la visualización del viento se utiliza un sistema de partículas, las cuales se crean con dos vectores, un vector para la posición y un vector para el viento, al procesar el archivo JSON se obtienen tanto la posición basado en un sistema de latitud y longitud y las componentes **u** y **v** del viento para crear el vector de velocidad del viento. Se utilizan partículas ya que a estas se les pueden agregar posiciones, fuerzas y direcciones que permiten una mejor visualización.

![Viento](https://kuwago-files.s3.amazonaws.com/res_1.png)

En la imagen anterior se puede ver el resultado en el cual se ve la dirección del viento y donde es más fuerte, aunque no se consigue realizar una simulación en movimiento del viento se pueden observar de forma estática  las corrientes de aire. 

Adicional a la información del viento se hace otro acercamiento en la visualización de datos, en este caso datos sobre terremotos en el mundo, los datos se obtuvieron del siguiente enlace:
[https://earthquake.usgs.gov/fdsnws/event/1/query.csv?starttime=2020-12-02%2000:00:00&endtime=2020-12-09%2023:59:59&minmagnitude=2.5&orderby=time](https://earthquake.usgs.gov/fdsnws/event/1/query.csv?starttime=2020-12-02%2000:00:00&endtime=2020-12-09%2023:59:59&minmagnitude=2.5&orderby=time). 
Para este caso la aproximación es un poco más sencilla, el dataset consta de coordenadas en grados y la magnitud del terremoto, con estos valores se ubica el punto en el cual se registro la actividad sísmica y basado en la magnitud se calcula el diámetro del circulo que usaremos para mostrar los datos, dado que la mayoría de sismos que se presentan al rededor del mundo son de baja intensidad se realiza un escalamiento para una mejor visualización como se puede observar.

![Sismos](https://kuwago-files.s3.amazonaws.com/res_2.png)

## Conclusiones
Para la visualización de datos se pueden usar muchas técnicas, dependiendo tanto del formato en el cual tenemos nuestra información y la cantidad de datos que vayamos a mostrar. También se debe tener en cuenta el rendimiento de la técnica a utilizar, al realizar la renderización del mapa de viento el rendimiento del computador en el cual se hace el proceso se ve fuertemente afectado y es por la cantidad de partículas que está renderizando, al rededor de 30 mil partículas, situación que no ocurre al mostrar los sismos.

## Futuras estrategias
Para nuestro proyecto tomamos varias referencias entre las cuales esta el repositorio de [Vladimir Agafonkin - webgl-wind](https://github.com/mapbox/webgl-wind) en el cual utilizan la misma fuente de información pero su aproximación es mapear estos datos en una imagen **.png**.

![enter image description here](https://kuwago-files.s3.amazonaws.com/wind.png)

Una vez los datos estén en este formato pasan la imagen como fuentes de datos a un modelo de viento de  WebGL y hacer el renderizado por medio de shaders, esta estrategia presenta un mayor rendimiento, en caso de continuar con el proyecto se tiene pensado abordar esta estrategia pero en la librería de **p5.js**.



## Referencias
[Vladimir Agafonkin - webgl-wind](https://github.com/mapbox/webgl-wind)

[How I built a wind map with WebGL](https://blog.mapbox.com/how-i-built-a-wind-map-with-webgl-b63022b5537f)

[Lluvia purpura en processing](https://youtu.be/KkyIDI6rQJI?list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH)

[Mapping Earthquake data](https://youtu.be/ZiYdOwOrGyc?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)

[Simulating Forces: Gravity and Wind](https://youtu.be/Uibl0UE4VH8)

[Sistema de particulas P5](https://p5js.org/es/examples/simulate-particle-system.html)



