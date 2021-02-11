import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsInputComponent } from './tags-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [TagsInputComponent],
  imports: [SharedModule, MatChipsModule, MatAutocompleteModule],
  exports: [TagsInputComponent],
})
export class TagsInputModule {}
