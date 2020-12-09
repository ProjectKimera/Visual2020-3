import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AmbientInfoComponent } from './ambient-info/ambient-info.component';
import { AmbientComponent } from './ambient/ambient.component';
import { AttenuationInfoComponent } from './attenuation-info/attenuation-info.component';
import { BreathInfoComponent } from './breath-info/breath-info.component';
import { EscalaGInfoComponent } from './escala-ginfo/escala-ginfo.component';
import { EscalaGrisesVideoInfoComponent } from './escala-grises-video-info/escala-grises-video-info.component';
import { EspiralInfoComponent } from './espiral-info/espiral-info.component';
import { FeetInfoComponent } from './feet-info/feet-info.component';
import { FogComponent } from './fog/fog.component';
import { HeringinfoComponent } from './heringinfo/heringinfo.component';
import { InformeT2Component } from './informe-t2/informe-t2.component';
import { KanisaInfoComponent } from './kanisa-info/kanisa-info.component';
import { KanizsaComponent } from './kanizsa/kanizsa.component';
import { OscInfoComponent } from './osc-info/osc-info.component';
import { RepoComponent } from './repo/repo.component';
import { WindMapComponent } from './wind-map/wind-map.component';

const routes: Routes = [
  {path: '', redirectTo: '/repo', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  //Taller2
  {path: 'repo', component: RepoComponent},
  {path: 'kaniza', component: KanisaInfoComponent},
  {path: 'hering', component: HeringinfoComponent},
  {path: 'breath', component: BreathInfoComponent},
  {path: 'feet', component: FeetInfoComponent},
  {path: 'osc', component: OscInfoComponent},
  {path: 'espiral', component: EspiralInfoComponent},
  {path: 'it2', component: InformeT2Component},
  {path: 'fog', component: FogComponent},
  {path: 'ambient', component: AmbientInfoComponent},
  {path: 'attenuation', component: AttenuationInfoComponent},
  {path: 'escg', component: EscalaGInfoComponent},
  {path: 'escgv', component: EscalaGrisesVideoInfoComponent},
  {path: 'wind', component: WindMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
