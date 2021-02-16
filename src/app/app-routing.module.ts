import { AddBonusComponent } from './features/add-bonus/add-bonus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('./features/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'bonuses',
        loadChildren: () =>
          import('./features/add-bonus/add-bonus.module').then((m) => m.AddBonusModule),
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./features/statistics/statistics.module').then((m) => m.StatisticsModule),
      },
      { path: 'bonuses/:id', component: AddBonusComponent },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then((m) => m.NotFound),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
