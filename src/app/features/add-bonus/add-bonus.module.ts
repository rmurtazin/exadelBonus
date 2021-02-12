import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddBonusComponent } from './add-bonus.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { BonusAddressService } from '@services/bonus-address.service';
import { AddBonusFormComponent } from './add-bonus-form/add-bonus-form.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AddBonusButtonComponent } from './add-bonus-button/add-bonus-button.component';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from 'src/app/app.module';
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [AddBonusComponent, AddBonusFormComponent, AddBonusButtonComponent],
  imports: [
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: AddBonusComponent, data: { roles: ['moderator', 'admin'] } },
    ]),
    SharedModule,
  ],
  providers: [BonusAddressService],
  exports: [AddBonusComponent, RouterModule],
})
export class AddBonusModule {}
