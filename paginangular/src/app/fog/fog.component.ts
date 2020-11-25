import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from "./../cargar-scripts.service";

@Component({
  selector: 'app-fog',
  templateUrl: './fog.component.html',
  styleUrls: ['./fog.component.css']
})
export class FogComponent implements OnInit {

  constructor(
    private _CargarScripts:CargarScriptsService
  )
  {
    _CargarScripts.Carga([
      "fogData/libs/glUtils.js",
      "fogData/libs/uiUtils.js",
      "fogData/vendor/glMatrix.js",
      "fogData/vendor/signals.js",
      "fogData/sketch.js"
    ])
  }

  ngOnInit(): void {
  }

}
