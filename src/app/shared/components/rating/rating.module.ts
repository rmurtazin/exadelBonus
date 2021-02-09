import { NgModule } from '@angular/core';
import { StarsComponent } from './stars/stars.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StarsComponent],
  imports: [MatIconModule],
  exports: [StarsComponent],
})
export class RatingModule {}
