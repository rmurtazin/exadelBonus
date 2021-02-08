import { MapModule } from './../map/map.module';
import { SharedModule } from './../../../shared/shared.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, SharedModule, MapModule],
  exports: [RouterModule, HomeComponent],
})
export class HomeModule {}
