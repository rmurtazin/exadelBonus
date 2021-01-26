import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'history', redirectTo: 'home'},
  { path: 'add-bonus', redirectTo: 'home'},
  { path: 'bonuses', redirectTo: 'home'},
  { path: 'users', redirectTo: 'home'},
  { path: 'logout', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
