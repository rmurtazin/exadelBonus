import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, TranslateModule, MatIconModule],
  exports: [NotFoundComponent],
})
export class NotFound {}
