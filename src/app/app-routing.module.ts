import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from '@components/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { AddBonusComponent } from '@components/add-bonus/add-bonus.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { roles: ['user', 'moderator', 'admin'] } },
      { path: 'history', redirectTo: '', data: { roles: ['user', 'moderator', 'admin'] } },
      { path: 'add-bonus', component: AddBonusComponent, data: { roles: ['moderator', 'admin'] } },
      { path: 'bonuses', redirectTo: '', data: { roles: ['moderator', 'admin'] } },
      { path: 'users', redirectTo: '', data: { roles: ['admin'] } },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
