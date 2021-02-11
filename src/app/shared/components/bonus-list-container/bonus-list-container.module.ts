import { SharedModule } from './../../shared.module';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BonusListViewComponent } from './bonus-list-view/bonus-list-view.component';
import { BonusDetailComponent } from './bonus-detail/bonus-detail.component';
import { BonusListContainerComponent } from './bonus-list-container.component';

@NgModule({
  declarations: [BonusListContainerComponent, BonusDetailComponent, BonusListViewComponent],
<<<<<<< HEAD
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule,
  ],
  exports: [BonusListContainerComponent, RouterModule, BonusListViewComponent],
=======
  imports: [MatCardModule, MatExpansionModule, RouterModule, SharedModule],
  exports: [BonusListContainerComponent, RouterModule],
>>>>>>> 27dd699d0dad2482fbb5b9c8f41d162192091a15
})
export class BonusListContainerModule {}
