import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '@components/map/map-container/map-container.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'home', component: MapComponent},
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
