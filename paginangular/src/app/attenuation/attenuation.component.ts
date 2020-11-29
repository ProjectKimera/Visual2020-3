import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-attenuation',
  templateUrl: './attenuation.component.html',
  styleUrls: ['./attenuation.component.css'],
})
export class AttenuationComponent implements OnInit {


  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    new p5(p => {


      let locX;
      let locY;

      let lightShader;

      p.preload = () =>{
        lightShader = p.loadShader( 'assets/attData/AttenuationVert1.vert', 'assets/attData/AttenuationFrag1.frag',);
      }

      p.setup = () => {
        p.createCanvas(400, 400, p.WEBGL);
      };

      p.draw = () => {
        p.background(255);
        locX = p.mouseX ;
        locY = p.mouseY ;
        p.shader(lightShader);
        p.pointLight(255, 255, 255, locX, locY, 300);
        p.push();
        p.rotateY(2.25);
        p.rotateX(-0.4);
        p.noStroke();
        p.box(150);
        p.pop();
      };
    }, this.el.nativeElement);
  }

}
