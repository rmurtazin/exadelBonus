import { NgModule } from '@angular/core';
import { CityInputComponent } from './city-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [CityInputComponent],
  imports: [
    SharedModule,
    MatAutocompleteModule,
  ],
  exports: [CityInputComponent],
})
export class CityInputModule {}
