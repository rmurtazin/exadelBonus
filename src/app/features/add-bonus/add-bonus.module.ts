import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddBonusComponent } from './add-bonus.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BonusAddressService } from '@services/bonus-address.service';
import { AddBonusFormComponent } from './add-bonus-form/add-bonus-form.component';
import { AddBonusButtonComponent } from './add-bonus-button/add-bonus-button.component';
import { BonusListContainerModule } from 'src/app/shared/components/bonus-list-container/bonus-list-container.module';

@NgModule({
  declarations: [AddBonusComponent, AddBonusFormComponent, AddBonusButtonComponent],
  imports: [
    MatDatepickerModule,
    NgxMaskModule.forRoot(),
    BonusListContainerModule,
    RouterModule.forChild([
      { path: '', component: AddBonusComponent, data: { roles: ['moderator', 'admin'] } },
    ]),
    SharedModule,
  ],
  providers: [BonusAddressService],
  exports: [AddBonusComponent, RouterModule],
})
export class AddBonusModule {}
