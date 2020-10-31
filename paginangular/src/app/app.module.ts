import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    InformeT2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
