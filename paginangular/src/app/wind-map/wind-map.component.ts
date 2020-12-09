import { Component, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import * as p5 from 'p5';

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
      let rotX, rotY;
      let scaler;
      let zoom;
      let windShader;

      p.preload = () =>{
        windShader = p.loadShader( 'assets/windData/WindVert.vert', 'assets/windData/WindFrag.frag',);
      }

      p.setup = () =>  {
        p.createCanvas(600, 500, p.WEBGL);
        img = p.loadImage('../assets/world-map.jpg');
        zoom = 1;
      }

      p.draw = () =>  {
        p.background(255, 255, 255);
        p.shader(windShader);
        p.rotateX(p.radians(p.mouseY) * 0.1);
        p.rotateY(p.radians(p.mouseX) * 0.1);
        p.noStroke();
        p.texture(img);
        p.sphere(200);
      }

      p.mouseWheel = (MouseEvent ) => {
        //zoom factor needs to be between about 0.99 and 1.01 to be able to multiply so add 1
        scaler = p.constrain(scaler * (-p.getCount()*.01 + 1.0), 1, 1.7);
      }
    }, this.el.nativeElement);
  }

}
