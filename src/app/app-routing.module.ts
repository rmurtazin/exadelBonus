import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from '@components/login/login.component';
import { LoginModule } from '@components/login/login.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  { path: 'history', redirectTo: 'home'},
  { path: 'add-bonus', redirectTo: 'home'},
  { path: 'bonuses', redirectTo: 'home'},
  { path: 'users', redirectTo: 'home'},
  { path: 'logout', component: LoginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
