import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-escv',
  templateUrl: './escv.component.html',
  styleUrls: ['./escv.component.css']
})
export class EscvComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    new p5(p => {

      let capture;

      p.setup = () => {
        p.createCanvas(500, 500);

        capture = p.createCapture(p.VIDEO);
        capture.hide();
      };

      p.draw = () => {
        p.background(220);

        capture.loadPixels();
        for (let x = 0; x < capture.width; x++) {
          for (let y = 0; y < capture.height; y++) {
            let i = (y * capture.width + x) * 4;

            let r = capture.pixels[i];
            let g = capture.pixels[i+1];
            let b = capture.pixels[i+2];
            let a = capture.pixels[i+3];

            // let bright = (r + g + b) / 3;
            let luma = 0.299 * r + 0.587 * g + 0.114 * b;

            capture.pixels[i] = luma;
            capture.pixels[i+1] = luma;
            capture.pixels[i+2] = luma;
          }
        }
        capture.updatePixels();

        p.image(capture, 0, 0, p.width, p.height);

      };
    }, this.el.nativeElement);

  }

}
