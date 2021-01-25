import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button'

const matModules = [
  MatAutocompleteModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   ...matModules
  ],
  exports: [
    ...matModules
  ]
})


export class MaterialModule { }
