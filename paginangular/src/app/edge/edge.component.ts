import { Component, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.css']
})
export class EdgeComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  @Input()
  imagen;

  @Input()
  kernel = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];

  ngOnInit(): void {

    new p5(p => {

      let img;
      let img2;

      let kernel = this.kernel;

      p.preload = () =>{
        img = p.loadImage(this.imagen);
      }

      p.setup = () => {
        p.createCanvas(500, 500);
        p.noLoop();
      };

      p.draw = () => {

        if(img.height>img.width){
          img.resize(0,500);
        }else{
          img.resize(500,0);
        }

        img2 = p.createImage(img.width, img.height);
        img2.loadPixels();


        for (let x = 1; x < img.width; x++) {
          for (let y = 1; y < img.height; y++) {
            let rtotal = 0;
            let gtotal = 0;
            let btotal = 0;

            for (let kx = -1; kx <= 1; kx++) {
              for (let ky = -1; ky <= 1; ky++) {
                let xpos = x + kx;
                let ypos = y + ky;
                rtotal += p.red(img.get(xpos, ypos)) * kernel[ky + 1][kx + 1];
                gtotal += p.green(img.get(xpos, ypos)) * kernel[ky + 1][kx + 1];
                btotal += p.blue(img.get(xpos, ypos)) * kernel[ky + 1][kx + 1];
              }
            }
            img2.set(x, y, p.color(rtotal, gtotal, btotal));
          }
        }
        img2.updatePixels();


        if(img2.height>img2.width){
          p.image(img2,250-img2.width/2,0);
        }else{
          p.image(img2,0,250-img2.height/2);
        }

      };

    }, this.el.nativeElement);

  }

}
