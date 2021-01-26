import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from '@components/map/map-container/map-container.component';
import { MapViewComponent } from '@components/map/map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ApiService} from '@services/api.service';
import { MarkersService } from '@services/markers.service';
import { HttpClientModule } from '@angular/common/http';
import { OfficesService } from '@services/offices.service';
import { BonusesService } from '@services/bonuses.service';
import { OfficePopupComponent } from './core/components/map/office-popup/office-popup.component';
import { MarkerEventsService } from '@services/marker-events.service';
import { PopupService } from '@services/popup.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    OfficePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MarkerEventsService,
    MarkersService,
    OfficePopupComponent,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
