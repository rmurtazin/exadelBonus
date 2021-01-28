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
import {HeaderComponent} from '@components/header/header.component';
import {CloseMenuDirective} from './shared/directives/close-menu.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './shared/components/home/home.component';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from '@components/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    OfficePopupComponent,
    HeaderComponent,
    CloseMenuDirective,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    MatButtonModule,
    MatIconModule,
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
