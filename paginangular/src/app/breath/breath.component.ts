import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-breath',
  templateUrl: './breath.component.html',
  styleUrls: ['./breath.component.css']
})
export class BreathComponent implements OnInit {

  constructor(    
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    new p5(p => {
      
      let angulo=0.0;
      let len=245;

      p.setup = () => {
        p.createCanvas(500,500);
        p.noStroke();
        //p.fill(255)
      };

      p.draw = () => {
        p.background(51);
        p.push();        
        p.rectMode(p.CENTER);
        p.fill(255, 255, 255);
        angulo = angulo + p.PI/180;
        p.translate(p.width / 2, p.height / 2);
        p.rotate(angulo);
        p.rect(0, 0, 300, 300);
        p.pop();
        if(p.keyIsDown(p.UP_ARROW)){
          len += 5;
          if(len>245){
            len=245;
          }
        }
        if(p.keyIsDown(p.DOWN_ARROW)){
          len -= 5;
          if(len<0){
            len=0;
          }
        }
        p.fill(153, 6, 33);
        p.rect(0,0,len,len);
        p.rect(0,p.height-len,len,p.height);
	    	p.rect(p.width-len,p.height-len,p.width,p.height);
        p.rect(p.width-len,0,p.width,len);
        
      };
    }, this.el.nativeElement);

  }

}
