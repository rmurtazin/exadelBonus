import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddBonusComponent } from './add-bonus.component';
import { BonusAddressService } from '@services/bonus-address.service';
import { AddBonusFormComponent } from './add-bonus-form/add-bonus-form.component';
import { AddBonusButtonComponent } from './add-bonus-button/add-bonus-button.component';
import { BonusListContainerModule } from 'src/app/shared/components/bonus-list-container/bonus-list-container.module';
import { BonusSearcherComponent } from './bonus-searcher/bonus-searcher.component';

@NgModule({
  declarations: [
    AddBonusComponent,
    AddBonusFormComponent,
    AddBonusButtonComponent,
    BonusSearcherComponent,
  ],
  imports: [
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
