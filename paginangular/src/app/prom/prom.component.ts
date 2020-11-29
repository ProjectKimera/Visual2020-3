import { Component, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-prom',
  templateUrl: './prom.component.html',
  styleUrls: ['./prom.component.css']
})
export class PromComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  @Input()
  imagen;

  ngOnInit(): void {

    new p5(p => {

      let img;

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
          p.image(img,250-img.width/2,0);
        }else{
          img.resize(500,0);
          p.image(img,0,250-img.height/2);
        }

        p.loadPixels();
        for (var y = 0; y < p.height; y++) {
            for (var x = 0; x < p.width; x++) {
              var index = (x + y * p.width)*4;
              var r = p.pixels[index+0];
              var g = p.pixels[index+1];
              var b = p.pixels[index+2];
              var a = p.pixels[index+3];

              var bw = (r + g + b)/3;

              p.pixels[index+0] = bw;
              p.pixels[index+1] = bw;
              p.pixels[index+2] = bw;
        }
      }
      p.updatePixels();


      };
    }, this.el.nativeElement);

  }

}
