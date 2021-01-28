import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from '@components/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home',
    canActivate: [AuthGuard],
    canActivateChild: [RoleGuard],
    children : [
      { path: '', component: HomeComponent},
      { path: 'history', redirectTo: 'home'},
      { path: 'add-bonus', redirectTo: 'home'},
      { path: 'bonuses', redirectTo: 'home'},
      { path: 'users', redirectTo: 'home'},
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
