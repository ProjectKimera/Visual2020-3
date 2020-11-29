import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//servicios
import {CargarScriptsService} from "./cargar-scripts.service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RepoComponent } from './repo/repo.component';
import { KanizsaComponent } from './kanizsa/kanizsa.component';
import { KanisaInfoComponent } from './kanisa-info/kanisa-info.component';
import { HeringComponent } from './hering/hering.component';
import { HeringinfoComponent } from './heringinfo/heringinfo.component';
import { BreathComponent } from './breath/breath.component';
import { BreathInfoComponent } from './breath-info/breath-info.component';
import { FeetComponent } from './feet/feet.component';
import { FeetInfoComponent } from './feet-info/feet-info.component';
import { OscComponent } from './osc/osc.component';
import { OscInfoComponent } from './osc-info/osc-info.component';
import { EspiralComponent } from './espiral/espiral.component';
import { EspiralInfoComponent } from './espiral-info/espiral-info.component';
import { InformeT2Component } from './informe-t2/informe-t2.component';
import { FogComponent } from './fog/fog.component';
import { AmbientComponent } from './ambient/ambient.component';
import { AmbientInfoComponent } from './ambient-info/ambient-info.component';
import { AttenuationInfoComponent } from './attenuation-info/attenuation-info.component';
import { AttenuationComponent } from './attenuation/attenuation.component';
import { EscalaGInfoComponent } from './escala-ginfo/escala-ginfo.component';
import { LumaComponent } from './luma/luma.component';
import { PromComponent } from './prom/prom.component';
import { EscalaGrisesVideoInfoComponent } from './escala-grises-video-info/escala-grises-video-info.component';
import { EscvComponent } from './escv/escv.component';
import { EdgeComponent } from './edge/edge.component';
import { EdgevideoComponent } from './edgevideo/edgevideo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    RepoComponent,
    KanizsaComponent,
    KanisaInfoComponent,
    HeringComponent,
    HeringinfoComponent,
    BreathComponent,
    BreathInfoComponent,
    FeetComponent,
    FeetInfoComponent,
    OscComponent,
    OscInfoComponent,
    EspiralComponent,
    EspiralInfoComponent,
    InformeT2Component,
    FogComponent,
    AmbientComponent,
    AmbientInfoComponent,
    AttenuationInfoComponent,
    AttenuationComponent,
    EscalaGInfoComponent,
    LumaComponent,
    PromComponent,
    EscalaGrisesVideoInfoComponent,
    EscvComponent,
    EdgeComponent,
    EdgevideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
