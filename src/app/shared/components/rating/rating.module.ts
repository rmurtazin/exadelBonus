import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { StarsComponent } from './stars/stars.component';
import { MatIconModule } from '@angular/material/icon';
import { RateComponent } from './rate/rate.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { RoundPipe } from '../../pipes/round.pipe';

@NgModule({
  declarations: [StarsComponent, RateComponent, RoundPipe],
  imports: [MatIconModule, CommonModule, MatButtonModule, MatSliderModule, SharedModule],
  exports: [StarsComponent, RateComponent],
})
export class RatingModule {}
