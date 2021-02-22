import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [LoginComponent, RouterModule],
})
export class LoginModule {}
