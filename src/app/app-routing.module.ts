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
      { path: 'history', redirectTo: 'home', data: { roles: ['user', 'moderator', 'admin'] } }, // TODO: lazy loading
      {
        path: 'add-bonus',
        loadChildren: () =>
          import('./features/add-bonus/add-bonus.module').then((m) => m.AddBonusModule),
      },
      { path: 'statistics', redirectTo: 'home', data: { roles: ['admin'] } }, // TODO: lazy loading
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
