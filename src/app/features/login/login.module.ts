import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    SharedModule,
  ],
  exports: [LoginComponent, RouterModule],
})
export class LoginModule {}
