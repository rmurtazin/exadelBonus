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
import { MarkerEventsService } from '@services/markers-events.service';
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
import { BonusListContainerComponent } from './core/components/bonus-list-container/bonus-list-container.component';
import { MarkerIconComponent } from './core/components/map/marker-icon/marker-icon.component';
import { ClusterIconComponent } from './core/components/map/cluster-icon/cluster-icon.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BonusListViewComponent } from './core/components/bonus-list-view/bonus-list-view.component';
import { DatepickerComponent } from './shared/components/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { RateComponent } from './shared/components/rate/rate.component';
import { RateWrapperComponent } from './shared/components/rate-wrapper/rate-wrapper.component';
import {MatSliderModule} from '@angular/material/slider';
import { BonusComponent } from './core/components/bonus/bonus.component';
import { HistoryComponent } from './shared/components/history/history.component';

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
    BonusListContainerComponent,
    BonusListViewComponent,
    ClusterIconComponent,
    MarkerIconComponent,
    DatepickerComponent,
    RateWrapperComponent,
    RateComponent,
    BonusComponent,
    HistoryComponent
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
    TranslateModule.forRoot({
      defaultLanguage: 'EN',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSliderModule,
  ],
  providers: [
    ApiService,
    OfficesService,
    BonusesService,
    MarkerEventsService,
    OfficePopupComponent,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    INTERCEPTOR_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
