import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
  ],
  exports: [RouterModule, HeaderComponent],
})
export class HeaderModule {}
