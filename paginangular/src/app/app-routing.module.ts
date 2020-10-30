import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreathInfoComponent } from './breath-info/breath-info.component';
import { HeringinfoComponent } from './heringinfo/heringinfo.component';
import { KanisaInfoComponent } from './kanisa-info/kanisa-info.component';
import { KanizsaComponent } from './kanizsa/kanizsa.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path: '', redirectTo: '/repo', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'repo', component: RepoComponent},
  {path: 'kaniza', component: KanisaInfoComponent},
  {path: 'hering', component: HeringinfoComponent},  
  {path: 'breath', component: BreathInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
