import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-espiral',
  templateUrl: './espiral.component.html',
  styleUrls: ['./espiral.component.css']
})
export class EspiralComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    new p5(p => {
      
      p.optical = (x, y, w, shrink, rotation, color0, color1) => {
        var whichColor = true; // color0 or color1?
        
        // Setup how to draw
        p.push();
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);
        p.noStroke();
        
        // Move the point of origin
        p.translate(x, y);
        
        //keep drawing rectangle while
        //the width is greater than zero
        while (w > 0) {
          // Select color
          if (whichColor) {
            p.fill(color0);
          } else {
            p.fill(color1);
          }
          
          //Flip the color
          whichColor = !whichColor;
          
          //Draw rectangle
          p.rect(0, 0, w, w);
          
          //Rotate around the pont of origin
          p.rotate(rotation);
          
          //shrink the rectangle width
          w -= shrink;
        }
        
        p.pop();
      }

      p.setup = () => {
        p.createCanvas(450, 450);
        var c0 = p.color(0);
        var c1 = p.color (255);
        p.optical(250, 250, 450, 20, 5, c0, c1);
      };

      p.draw = () => {
        var c0 = p.color(0);
        var c1 = p.color (255);
        p.rotation = p.int(p.mouseX / p.width * 20)
        p.optical(225, 225, 450, 20, p.rotation, c0, c1);
        
      };
    }, this.el.nativeElement);

  }

}
