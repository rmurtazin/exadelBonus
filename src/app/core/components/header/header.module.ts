import { SharedModule } from './../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule, SharedModule],
  exports: [RouterModule, HeaderComponent],
})
export class HeaderModule {}
