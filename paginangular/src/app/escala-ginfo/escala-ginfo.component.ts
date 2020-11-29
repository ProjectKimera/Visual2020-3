import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escala-ginfo',
  templateUrl: './escala-ginfo.component.html',
  styleUrls: ['./escala-ginfo.component.css']
})
export class EscalaGInfoComponent implements OnInit {

  constructor() { }

  escala:string="";
  imagen;
  msg:string="";

  edge = [
    [-1, -1, -1],
    [-1, 8, -1],
    [-1, -1, -1]
  ];

  gauss = [
    [1/9, 1/9, 1/9],
    [1/9, 1/9, 1/9],
    [1/9, 1/9, 1/9]
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

  subirImagen(event){
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.imagen = reader.result;
		}
	}

}
