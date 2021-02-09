import { RouterModule } from '@angular/router';
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
import { NgxMaskModule } from 'ngx-mask';
import { AddBonusButtonComponent } from './add-bonus-button/add-bonus-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { BonusListContainerModule } from 'src/app/shared/components/bonus-list-container/bonus-list-container.module';

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
    BonusListContainerModule,
    RouterModule.forChild([
      { path: '', component: AddBonusComponent, data: { roles: ['moderator', 'admin'] } },
    ]),
  ],
  providers: [BonusAddressService],
  exports: [AddBonusComponent, RouterModule],
})
export class AddBonusModule {}
