import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-kanizsa',
  templateUrl: './kanizsa.component.html',
  styleUrls: ['./kanizsa.component.css']
})
export class KanizsaComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    new p5(p => {
      
      p.pacMan = (x,y,angle) =>{
        p.push();
        p.fill(0);
        p.translate(x, y);
	      p.rectMode(p.CENTER);
	      p.arc(x, y, 100, 100, 32 + angle, -32 + angle);
	      p.pop();
      };

      p.setup = () => {
        p.createCanvas(500, 500);
	      p.angleMode(p.DEGREES);
	      p.noStroke();
      };

      p.draw = () => {
        p.background(100, 40, 200);

        p.fill(0);

        p.stroke(0);
        p.strokeWeight (4);

        p.line( 143, 256, 100, 176);
        p.line( 190, 176, 100, 176);
        
        p.line ( 188, 341, 240, 433);
        p.line ( 287, 341,240, 433);
        
        p.line (376, 176, 333, 256); 
        p.line (376, 176, 286, 176);

        p.strokeWeight (1);

        if (!(p.keyIsPressed && p.key == 'k')) {
          p.pacMan(120, 50, 90);
          p.pacMan(50, 170, 329);
          p.pacMan(190, 170, 209);
        }
        else{
          p.pacMan(120, 50, 270);
          p.pacMan(50, 170, 509);
          p.pacMan(190, 170, 389);
        }

        p.fill(255, 0, 0);
	      p.ellipse(240, 245, 3,3);
      };
    }, this.el.nativeElement);

  }

}
