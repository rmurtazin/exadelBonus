import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BonusListViewComponent } from './bonus-list-view/bonus-list-view.component';
import { BonusListContainerComponent } from './bonus-list-container.component';
import { MatIconModule } from '@angular/material/icon';
import { BonusComponent } from './bonus/bonus.component';
import { RatingModule } from '../rating/rating.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [BonusListContainerComponent, BonusListViewComponent, BonusComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        RouterModule,
        RatingModule,
        MatProgressSpinnerModule
    ],
  exports: [BonusListContainerComponent, RouterModule],
})
export class BonusListContainerModule {}
