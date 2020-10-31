import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-osc',
  templateUrl: './osc.component.html',
  styleUrls: ['./osc.component.css']
})
export class OscComponent implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    new p5(p => {
      let size = 500;
      let circleSize = 450;
      let numSteps = 200;
      let l;
      let angleMax = 5;
      let numBalls = 10;
      let ballSize = 40;
      let balls = [];
      var showLine = 1;

      class OscillatingBall {  
        angle;
        length;
        position;
        speed;
        
        constructor(angle, length, position, speed) {
          this.angle = angle;
          this.length = length;
          this.position = position % length; // position always inside length
          this.speed = speed;
        }
        
        move() {
          this.position += this.speed;
          
          if (this.position > this.length) {
            this.position = this.length;
            this.speed = -1 * this.speed;
          } else
            if (this.position < 0) {
            this.position = 0;
            this.speed = -1 * this.speed;
          }
        }
        
        draw() {
          p.push();
          p.rotate(this.angle);
          p.translate(-this.length/2, 0)
          p.strokeWeight(1);
          p.stroke(0);
          p.line(0, 0, this.length, 0);
          p.stroke(255);
          p.fill(255);
          p.ellipse(this.position, 0, ballSize, ballSize);
          p.pop();
        }
        
        drawBall() {
          p.push();
          p.rotate(this.angle);
          p.translate(-this.length/2, 0)
          p.stroke(250);
          p.fill(250);
          p.ellipse(this.position, 0, ballSize, ballSize);
          p.pop();
        }
        
        drawLine() {
          p.push();
          p.rotate(this.angle);
          p.translate(-this.length/2, 0)
          p.strokeWeight(1);
          p.stroke(0);
          p.line(0, 0, this.length, 0);
          p.pop();
        }
        
      }

      p.setup = () => {
        p.createCanvas(size, size);
        let angleStep = p.PI / numBalls;
        let positionStep = circleSize / numBalls;
        let speed = circleSize / numSteps;
        l = circleSize / (2*p.sin(angleMax));
        for (let i=0, angle=0, pos=0; i<numBalls; i++, angle+=angleStep, pos+=positionStep) {
          balls[i] = new OscillatingBall(angle, circleSize, pos, speed);
        }
      };

      p.draw = () => {
        p.translate(p.width/2, p.height/2);
        p.background(0);
        p.noStroke();
        p.fill(80);
        p.ellipse(0, 0, circleSize, circleSize);
        for (let i=0; i<numBalls; i++) {
          balls[i].move();
          if (showLine == 1){
            balls[i].drawLine();
          }
        }
        for (let i=0; i<numBalls; i++) {
          balls[i].drawBall();
        }
        
      };

      p.mousePressed = () => {
        showLine *= -1;
      }


    }, this.el.nativeElement);

  }

}
