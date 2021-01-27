import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from '@components/map/map-container/map-container.component';
import { MapViewComponent } from '@components/map/map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ApiService} from '@services/api.service';
import { MarkersService } from '@services/markers.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OfficesService } from '@services/offices.service';
import { BonusesService } from '@services/bonuses.service';
import { AuthInterceptor } from '@services/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MarkersService,
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
