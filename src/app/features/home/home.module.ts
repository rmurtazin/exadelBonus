import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { OfficePopupComponent } from './map/office-popup/office-popup.component';
import { MarkerIconComponent } from './map/marker-icon/marker-icon.component';
import { ClusterIconComponent } from './map/cluster-icon/cluster-icon.component';
import { BonusPopupComponent } from './map/bonus-popup/bonus-popup.component';
import { MapViewComponent } from './map/map-view/map-view.component';
import { MapComponent } from './map/map-container/map-container.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    RouterModule,
    SharedModule,
    TranslateModule,
    MatIconModule,
    LeafletModule,
  ],
  exports: [RouterModule, HomeComponent],
})
export class HomeModule {}
