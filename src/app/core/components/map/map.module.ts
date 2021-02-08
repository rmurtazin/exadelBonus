import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { OfficePopupComponent } from '@components/map/office-popup/office-popup.component';
import { MarkerIconComponent } from '@components/map/marker-icon/marker-icon.component';
import { ClusterIconComponent } from '@components/map/cluster-icon/cluster-icon.component';
import { BonusPopupComponent } from '@components/map/bonus-popup/bonus-popup.component';
import { MapViewComponent } from '@components/map/map-view/map-view.component';
import { MapComponent } from '@components/map/map-container/map-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent,
    MapViewComponent,
    BonusPopupComponent,
    ClusterIconComponent,
    MarkerIconComponent,
    OfficePopupComponent,
  ],
  imports: [CommonModule, TranslateModule, MatIconModule, LeafletModule],
  exports: [MapComponent],
  providers: [OfficePopupComponent],
})
export class MapModule {}
