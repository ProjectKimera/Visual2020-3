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
    BreathInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
