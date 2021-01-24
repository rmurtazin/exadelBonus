import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'guard/auth.guard';
import { AdminComponent } from './fitures/admin/admin.component';
import { LeafletMapViewComponent } from './fitures/home-page/components/leaflet-map-view/leaflet-map-view.component';
import { LoginComponent } from './fitures/login/login.component';
import { SharedModule } from './shared/shared-modules/shared.module';

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: LeafletMapViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
