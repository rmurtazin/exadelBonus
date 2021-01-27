import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonusDetailComponent } from './core/components/bonus-detail/bonus-detail.component';

const routes: Routes = [{path: 'bonus', component: BonusDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
