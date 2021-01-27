import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from '@components/map/map-container/map-container.component';
import { MapViewComponent } from '@components/map/map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ApiService} from '@services/api.service';
import { MarkersService } from '@services/markers.service';
import { HttpClientModule } from '@angular/common/http';
import { OfficesService } from '@services/offices.service';
import { BonusesService } from '@services/bonuses.service';
import { OfficePopupComponent } from './core/components/map/office-popup/office-popup.component';
import { MarkerEventsService } from '@services/markers-events.service';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginModule } from '@components/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    OfficePopupComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    LoginModule,
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MarkersService,
    MarkerEventsService,
    OfficePopupComponent,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
