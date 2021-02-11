import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forChild([{ path: '', component: NotFoundComponent }]), SharedModule],
  exports: [NotFoundComponent, RouterModule],
})
export class NotFound {}
