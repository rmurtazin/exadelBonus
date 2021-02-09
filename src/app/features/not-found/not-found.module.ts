import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    RouterModule.forChild([{ path: '', component: NotFoundComponent }]),
  ],
  exports: [NotFoundComponent, RouterModule],
})
export class NotFound {}
