import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBonusComponent } from './add-bonus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { BonusAddressService } from '@services/bonus-address.service';
import { AddBonusFormComponent } from './add-bonus-form/add-bonus-form.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AddBonusButtonComponent } from './add-bonus-button/add-bonus-button.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AddBonusComponent, AddBonusFormComponent, AddBonusButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    NgxMaskModule.forRoot(),
    TranslateModule,
    MatSelectModule,
  ],
  providers: [BonusAddressService],
  exports: [AddBonusComponent],
})
export class AddBonusModule {}
