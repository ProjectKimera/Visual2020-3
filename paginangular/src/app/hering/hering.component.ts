import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-hering',
  templateUrl: './hering.component.html',
  styleUrls: ['./hering.component.css']
})
export class HeringComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    new p5(p => {
      
      p.setup = () => {
        p.createCanvas(300, 500);
      };

      p.draw = () => {
        p.background(255);

        p.strokeWeight(3);
        p.stroke(202,0,27);
        p.line(100, 0, 100, p.height);
        p.line(200, 0, 200, p.height);

        p.strokeWeight(1);
        p.stroke(0);
        p.translate(p.width / 2, p.height / 2);
        if (!p.mouseIsPressed) {
          const lines = 25;
          const rad = 300;
          const thetaStep = p.PI / (lines + 1);
          for (var i = 1; i <= lines; i++) {
            p.line(rad * p.sin(i * thetaStep), rad * p.cos(i * thetaStep), -rad * p.sin(i * thetaStep), -rad * p.cos(i * thetaStep));
          }
        }
      };
    }, this.el.nativeElement);


  }

}
