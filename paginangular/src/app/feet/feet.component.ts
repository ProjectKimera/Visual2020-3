import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-feet',
  templateUrl: './feet.component.html',
  styleUrls: ['./feet.component.css']
})
export class FeetComponent implements OnInit {

  constructor(    
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    new p5(p => {

      let lines = 20;
      let pos = 0;
      let bandera = true;

      p.setup = () => {
        p.createCanvas(600,500);
        p.noStroke();
      };

      p.draw = () => {
        p.background(240);
        p.push();
        if(p.keyIsDown(p.UP_ARROW)){
          lines += 1;
          if(lines>50){
            lines=50;
          }
        }
        if(p.keyIsDown(p.DOWN_ARROW)){
          lines -= 1;
          if(lines<10){
            lines=10;
          }
        }
        if (!p.mouseIsPressed){
          p.fill(0);
          let x = p.width/lines;
          for (var i = 0; i <= p.width-1; i=i+x){
            p.rect(i,0,(x/2),p.height);
          }
        }
        p.pop();

        if(bandera){
          pos+=1;
          if(pos>530){
            bandera=false;
          }
        }else{
          pos-=1;
          if(pos<0){
            bandera=true;
          }
        }

        p.fill(238,241,6);
        p.rect(pos,50,70,30);
        p.fill(3,16,88);
        p.rect(pos,174,70,30);
        p.fill(255);
        p.rect(pos,298,70,30);
        p.fill(0);
        p.rect(pos,420,70,30);
        
      };
    }, this.el.nativeElement);

  }

}
