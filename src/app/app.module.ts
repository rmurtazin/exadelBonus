import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MdcTextFieldModule } from '@angular-mdc/web/textfield';
import {MdcIconButtonModule} from '@angular-mdc/web/icon-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './core/components/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcButtonModule } from '@angular-mdc/web/button';
import { TokenInterceptor } from './core/interseptor/token.interseptor';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdcTextFieldModule,
    MdcIconButtonModule,
    BrowserAnimationsModule,
    MdcButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
