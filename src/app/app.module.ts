import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from '@components/map/map-container/map-container.component';
import { MapViewComponent } from '@components/map/map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ApiService } from '@services/api.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OfficesService } from '@services/offices.service';
import { BonusesService } from '@services/bonuses.service';
import { LanguageSwitcherDirective } from './shared/directives/language-switcher.directive';
import { MatButtonModule } from '@angular/material/button';
import { OfficePopupComponent } from './core/components/map/office-popup/office-popup.component';
import { MapEventsService } from '@services/map-events.service';
import { BonusDetailComponent } from './core/components/bonus-detail/bonus-detail.component';
import { HeaderComponent } from '@components/header/header.component';
import { CloseMenuDirective } from './shared/directives/close-menu.directive';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './shared/components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from '@services/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginModule } from '@components/login/login.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { FooterComponent } from '@components/footer/footer.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BonusPopupComponent } from '@components/map/bonus-popup/bonus-popup.component';
import { MarkerIconComponent } from './core/components/map/marker-icon/marker-icon.component';
import { ClusterIconComponent } from './core/components/map/cluster-icon/cluster-icon.component';
import { BonusListComponent } from './core/components/bonus-list/bonus-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChoosePlaceDialogComponent } from './core/components/choose-place-dialog/choose-place-dialog.component';
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    OfficePopupComponent,
    BonusDetailComponent,
    LanguageSwitcherDirective,
    OfficePopupComponent,
    BonusPopupComponent,
    HeaderComponent,
    CloseMenuDirective,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    BonusListComponent,
    ClusterIconComponent,
    MarkerIconComponent,
    ChoosePlaceDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    LoginModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    TranslateModule.forRoot({
      defaultLanguage: 'EN',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MapEventsService,
    OfficePopupComponent,
    BrowserAnimationsModule,
    LayoutModule,
    INTERCEPTOR_PROVIDER,
    MatDialog,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
