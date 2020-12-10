import { Component, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import * as p5 from 'p5';
import { DriverProvider } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-wind-map',
  templateUrl: './wind-map.component.html',
  styleUrls: ['./wind-map.component.css']
})
export class WindMapComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    new p5(p => {
      let img;
      let lat = 4.60971;
      let lon = -74.08175;
      let latC = 0;
      let lonC = 0;
      var zoom = 1;
      let air_part = [];

      var table;

      var lx = 256;
      var ly = 0;
      var cont;
      
      p.preload = () =>{
        img = p.loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiZGFhcmFxdWVtIiwiYSI6ImNraWh2dHI4MTAzazIyc21lOXU4NW15dHoifQ.gON30ey0Mf75A5RAS2spaQ')
        // otherdata = p.loadStrings('https://nomads.ncep.noaa.gov/cgi-bin/filter_fnl.pl?file=gdas.t12z.pgrb2.1p00.anl&all_lev=on&leftlon=0&rightlon=360&toplat=90&bottomlat=-90&dir=%2Fgdas.20201209%2F12')
        table = p.loadTable('/assets/windData/erathquake.csv', 'csv', 'header');
        
      }

      p.setup = () =>  {
        p.createCanvas(1024, 512);
        p.translate(p.width / 2, p.height /2);
        p.imageMode(p.CENTER)
        p.image(img, 0, 0); 

        var cx = p.getXCoords(lonC)
        var cy = p.getYCoords(latC)

        var x = p.getXCoords(lon) - cx;
        var y = p.getYCoords(lat) - cy;
        
        for (var r = 0; r < table.getRowCount(); r++){
          var Elat = table.getString(r,1)
          var Elon = table.getString(r,2)
          var Emag = table.getString(r,4)
          Emag = p.pow(10, Emag);
          Emag = p.sqrt(Emag);
          var MaxMag = p.sqrt(p.pow(10, 10));
          var d = p.map(Emag, 0, MaxMag, 0, 180)
          var x = p.getXCoords(Elon) - cx;
          var y = p.getYCoords(Elat) - cy;
          p.stroke(255, 0, 255)
          p.fill(255, 0, 255, 200);
          p.ellipse(x, y, d, d);
        }
        
        for (var i = 0; i < 10; i++){
          air_part.push(new Air())
        }
        console.log(air_part)

        
      }

      p.draw = () =>  {
        air_part.forEach(air => {
          air.fall()
          air.show();  
        });
        
      }

      p.getXCoords = (vlon) =>{
        vlon = p.radians(vlon);
        var a = (256 / p.PI) * p.pow(2, zoom );
        var b = (vlon + p.PI)
        return a * b;

      }

      p.getYCoords = (vlat) =>{
        vlat = p.radians(vlat);
        var a = (256 / p.PI) * p.pow(2, zoom ) 
        var b = p.tan(p.PI / 4 + vlat / 2);
        var c = p.PI - p.log(b)
        return a * c;
      }

      class Air {
        x = p.random(p.width);
        y = p.random(-200, -100);
        yspeed = p.random(4, 10) * 0.1;
      
        fall = () => {
          this.y = this.y + this.yspeed;
          if(this.y > p.height){
            this.yspeed = p.random(4, 10);
          }
        }
      
        show = () => {
          p.stroke(138, 43, 226);
          var xx, yy;
          // xx = p.getXCoords(this.x);
          // yy = p.getYCoords(this.y);
          // p.line(xx,yy,xx,yy+10);
          p.line(this.x,this.y,this.x,this.y+10);
        }
      }

    }, this.el.nativeElement);
  }

}

