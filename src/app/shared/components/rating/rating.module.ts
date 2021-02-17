import { NgModule } from '@angular/core';
import { StarsComponent } from './stars/stars.component';
import { MatIconModule } from '@angular/material/icon';
import { RateComponent } from './rate/rate.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [StarsComponent, RateComponent],
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressSpinnerModule,
  ],
  exports: [StarsComponent, RateComponent],
})
export class RatingModule {}
