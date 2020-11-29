import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escala-grises-video-info',
  templateUrl: './escala-grises-video-info.component.html',
  styleUrls: ['./escala-grises-video-info.component.css']
})
export class EscalaGrisesVideoInfoComponent implements OnInit {

  constructor() { }

  escala:string="";

  edge = [
    [-1, -1, -1],
    [-1, 8, -1],
    [-1, -1, -1]
  ];

  gauss = [
    [1.0/16.0, 2.0/16.0, 1.0/16.0],
    [2.0/16.0, 4.0/16.0, 2.0/16.0],
    [1.0/16.0, 2.0/16.0, 1.0/16.0]
  ];

  shar = [
    [0, -1, 0],
    [-1, 5, -1],
    [0, -1, 0]
  ];

  emboss = [
    [-2, -1, 0],
    [-1, 1, 1],
    [0, 1, 2]
  ];

  sobel = [
    [1, 0, -1],
    [2, 0, -2],
    [1, 0, -1]
  ];

  ngOnInit(): void {
  }

}
