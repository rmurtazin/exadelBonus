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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '@components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MarkersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
