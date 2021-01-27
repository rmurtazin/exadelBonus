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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OfficesService } from '@services/offices.service';
import { BonusesService } from '@services/bonuses.service';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MarkersService,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
