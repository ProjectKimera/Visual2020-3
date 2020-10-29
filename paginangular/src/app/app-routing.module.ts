import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path: '', redirectTo: '/repo', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'repo', component: RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
