import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from '@components/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import {HistoryComponent} from './shared/components/history/history.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivate: [AuthGuard],
    canActivateChild: [RoleGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'add-bonus', redirectTo: '' },
      { path: 'bonuses', redirectTo: '' },
      { path: 'users', redirectTo: '' },
    ],
  },
  {
    path: 'history',
    canActivate: [AuthGuard],
    component: HistoryComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
