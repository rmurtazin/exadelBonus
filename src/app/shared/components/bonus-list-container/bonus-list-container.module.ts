import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BonusListViewComponent } from './bonus-list-view/bonus-list-view.component';
import { BonusDetailComponent } from './bonus-detail/bonus-detail.component';
import { BonusListContainerComponent } from './bonus-list-container.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BonusListContainerComponent, BonusDetailComponent, BonusListViewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule,
  ],
  exports: [BonusListContainerComponent, RouterModule, BonusListViewComponent],
})
export class BonusListContainerModule {}
