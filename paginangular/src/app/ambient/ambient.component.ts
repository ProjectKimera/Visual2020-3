import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-ambient',
  templateUrl: './ambient.component.html',
  styleUrls: ['./ambient.component.css']
})
export class AmbientComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    new p5(p => {

      let intensity = 100;

      p.setup = () => {
        p.createCanvas(400, 400, p.WEBGL);
      };

      p.draw = () => {
        p.background(0);

        p.ambientLight(intensity);

        p.push();
        p.translate(-p.width / 4, 0, 0);
        p.rotateZ(p.frameCount * 0.02);
        p.rotateX(p.frameCount * 0.02);
        p.specularMaterial(236,7,7);
        p.box(100, 100, 100);
        p.pop();

        p.push();
        p.translate(p.width / 4, 0, 0);
        p.rotateZ(p.frameCount * -0.02);
        p.rotateX(p.frameCount * -0.02);
        p.ambientMaterial(236,7,7);
        p.sphere(75,24);
        p.pop();


        if(p.keyIsDown(p.UP_ARROW)){
          intensity += 5;
          if(intensity>245){
            intensity=245;
          }
        }
        if(p.keyIsDown(p.DOWN_ARROW)){
          intensity -= 5;
          if(intensity<0){
            intensity=0;
          }
        }

      };
    }, this.el.nativeElement);

  }

}
