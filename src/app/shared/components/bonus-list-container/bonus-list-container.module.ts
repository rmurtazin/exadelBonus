import { SharedModule } from './../../shared.module';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BonusListViewComponent } from './bonus-list-view/bonus-list-view.component';
import { BonusDetailComponent } from './bonus-detail/bonus-detail.component';
import { BonusListContainerComponent } from './bonus-list-container.component';
import { BonusComponent } from './bonus/bonus.component';
import { RatingModule } from '../rating/rating.module';
import { TransitionGroupDirective } from '../../directives/transition-group.directive';
import { TransitionGroupItemDirective } from '../../directives/transition-group-item.directive';

@NgModule({
  declarations: [
    BonusListContainerComponent,
    BonusDetailComponent,
    BonusListViewComponent,
    BonusComponent,
    TransitionGroupDirective,
    TransitionGroupItemDirective,
  ],
  imports: [MatCardModule, MatExpansionModule, RouterModule, SharedModule, RatingModule],
  exports: [
    BonusListContainerComponent,
    RouterModule,
    BonusListViewComponent,
    TransitionGroupDirective,
    TransitionGroupItemDirective,
  ],
})
export class BonusListContainerModule {}
