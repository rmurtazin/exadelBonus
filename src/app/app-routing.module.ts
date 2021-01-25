import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AddBonusComponent } from './core/features/add-bonus/add-bonus.component';
import { StatisticsComponent } from './core/features/statistics/statistics.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home',
    canActivate: [AuthGuard],
    children : [
      { path: '', component: HomeComponent},
      { path: 'add-bonus', component: AddBonusComponent},
      { path: 'statistics', component: StatisticsComponent}
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
