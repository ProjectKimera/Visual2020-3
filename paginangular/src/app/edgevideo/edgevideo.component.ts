import { Component, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-edgevideo',
  templateUrl: './edgevideo.component.html',
  styleUrls: ['./edgevideo.component.css']
})
export class EdgevideoComponent implements OnInit {

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
        p.createCanvas(500, 700);
        p.background(255);

        var maxRange = 256
        p.colorMode(p.HSL, maxRange);

        if(img.height>img.width){
          img.resize(0,500);
          p.image(img,250-img.width/2,0);
        }else{
          img.resize(500,0);
          p.image(img,0,250-img.height/2);
        }

        var histogram = new Array(maxRange);
        for (let i = 0; i <= maxRange; i++) {
          histogram[i] = 0
        }

        p.loadPixels();

        for (var x = 0; x < img.width; x+=5) {
          for (var y = 0; y < img.height; y+=5) {
            var loc = (x + y * img.width) * 4;
            var h = p.pixels[loc];
            var s = p.pixels[loc + 1];
            var l = p.pixels[loc + 2];
            var a = p.pixels[loc + 3];
            let b = p.int(l);
            histogram[b]++
          }
        }
        //img.filter(GRAY);
        //p.image(img, 0, 0);
        p.stroke(300,100,80)
        p.push()
        p.translate(10,0)
        for (x = 0; x <= maxRange; x++) {
          let index = histogram[x];

          let y1=p.int(p.map(index, 0, p.max(histogram), p.height, p.height-200));
          let y2 = p.height
          let xPos = p.map(x,0,maxRange,0, p.width-20)
          p.line(xPos, y1, xPos, y2);
        }
        p.pop()
      };

      p.draw = () => {

      };
    }, this.el.nativeElement);


  }

}
