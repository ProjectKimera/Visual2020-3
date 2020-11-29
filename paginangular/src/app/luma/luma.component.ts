import { Component, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-luma',
  templateUrl: './luma.component.html',
  styleUrls: ['./luma.component.css']
})
export class LumaComponent implements OnInit {

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
        for(let i = 0;i< p.pixels.length; i+=4){
          let c = p.color(0.2126*p.pixels[i] + 0.7152*p.pixels[i + 1] +  0.0722*p.pixels[i + 2]);
          p.pixels[i] = p.red(c);
          p.pixels[i + 1] = p.green(c);
          p.pixels[i + 2] = p.blue(c);
        }
        p.updatePixels();

      };
    }, this.el.nativeElement);

  }

}
