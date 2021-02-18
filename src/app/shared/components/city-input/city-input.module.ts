import { NgModule } from '@angular/core';
import { CityInputComponent } from './city-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '../../shared.module';
import { BonusesService } from '@services/bonuses.service';

@NgModule({
  declarations: [CityInputComponent],
  imports: [SharedModule, MatAutocompleteModule],
  providers: [BonusesService],
  exports: [CityInputComponent],
})
export class CityInputModule {}
