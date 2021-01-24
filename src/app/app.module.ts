import { Injector, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared-modules/shared.module';
import { LoginComponent } from './fitures/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';
import { AuthGuard } from './core/guard/auth.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './fitures/home-page/components/popup-component/popup.component';
import { LeafletMapContainerComponent } from './fitures/home-page/components/leaflet-map-container/leaflet-map-container.component';
import { LeafletMapViewComponent } from './fitures/home-page/components/leaflet-map-view/leaflet-map-view.component';
import { ModalComponent } from './fitures/home-page/components/modal-component/modal.component';
import { MarkersService } from './fitures/home-page/services/markers.service';
import { OfficeService } from './fitures/home-page/services/offices.service';
import { createCustomElement } from "@angular/elements";
import { LeafletDirective, LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedService } from 'services/comunication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LeafletMapContainerComponent, 
    LeafletMapViewComponent,
    PopupComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    LeafletModule,
    MatDialogModule,
  ],
  providers: [
    ApiService, 
    AuthService, 
    AuthGuard,
    MarkersService,
    OfficeService,
    SharedService,
    LeafletDirective
  ],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const PopupElement = createCustomElement(PopupComponent, {injector});
    customElements.define('popup-element', PopupElement);
  }
}
