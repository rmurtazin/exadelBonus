import { LanguageSwitcherDirective } from './directives/language-switcher.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { DatepickerModule } from './components/datepicker/datepicker.module';
import { BonusListContainerModule } from './components/bonus-list-container/bonus-list-container.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CloseMenuDirective, LanguageSwitcherDirective],
  imports: [BonusListContainerModule, DatepickerModule],
  exports: [
    BonusListContainerModule,
    DatepickerModule,
    CloseMenuDirective,
    LanguageSwitcherDirective,
  ],
})
export class SharedModule {}
