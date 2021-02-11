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
  imports: [MatCardModule, MatExpansionModule, RouterModule, SharedModule],
  exports: [BonusListContainerComponent, RouterModule],
})
export class BonusListContainerModule {}
