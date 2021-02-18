import { NgModule } from '@angular/core';
import { CityInputComponent } from './city-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '../../shared.module';
import { CityService } from '@services/city.service';

@NgModule({
  declarations: [CityInputComponent],
  imports: [SharedModule, MatAutocompleteModule],
  providers: [CityService],
  exports: [CityInputComponent],
})
export class CityInputModule {}
