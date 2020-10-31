import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreathInfoComponent } from './breath-info/breath-info.component';
import { EspiralInfoComponent } from './espiral-info/espiral-info.component';
import { FeetInfoComponent } from './feet-info/feet-info.component';
import { HeringinfoComponent } from './heringinfo/heringinfo.component';
import { InformeT2Component } from './informe-t2/informe-t2.component';
import { KanisaInfoComponent } from './kanisa-info/kanisa-info.component';
import { KanizsaComponent } from './kanizsa/kanizsa.component';
import { OscInfoComponent } from './osc-info/osc-info.component';
import { RepoComponent } from './repo/repo.component';

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
  {path: 'it2', component: InformeT2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
