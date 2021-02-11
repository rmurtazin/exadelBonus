import { RouterModule } from '@angular/router';
import { BonusListContainerModule } from './../../shared/components/bonus-list-container/bonus-list-container.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OfficePopupComponent } from './map/office-popup/office-popup.component';
import { MarkerIconComponent } from './map/marker-icon/marker-icon.component';
import { ClusterIconComponent } from './map/cluster-icon/cluster-icon.component';
import { BonusPopupComponent } from './map/bonus-popup/bonus-popup.component';
import { MapViewComponent } from './map/map-view/map-view.component';
import { MapComponent } from './map/map-container/map-container.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ChoosePlaceDialogModule } from 'src/app/shared/components/choose-place-dialog/choose-place-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterContainerModule } from 'src/app/shared/components/filter-container/filter-container.module';

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    MapViewComponent,
    BonusPopupComponent,
    ClusterIconComponent,
    MarkerIconComponent,
    OfficePopupComponent,
  ],
  imports: [
    SharedModule,
    LeafletModule,
    BonusListContainerModule,
    ChoosePlaceDialogModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, data: { roles: ['user', 'moderator', 'admin'] } },
    ]),
  ],
  exports: [HomeComponent, RouterModule],
})
export class HomeModule {}
