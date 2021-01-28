import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from '@components/map/map-container/map-container.component';
import { MapViewComponent } from '@components/map/map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ApiService} from '@services/api.service';
import { MarkersService } from '@services/markers.service';
import { HttpClientModule } from '@angular/common/http';
import { OfficesService } from '@services/offices.service';
import { BonusesService } from '@services/bonuses.service';
import { LanguageSwitcherDirective } from './shared/directives/language-switcher.directive';
import { MatButtonModule } from '@angular/material/button';
import { OfficePopupComponent } from './core/components/map/office-popup/office-popup.component';
import { MarkerEventsService } from '@services/markers-events.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    LanguageSwitcherDirective,
    OfficePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    MatButtonModule,
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MarkersService,
    MarkerEventsService,
    OfficePopupComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
