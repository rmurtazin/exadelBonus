import { LanguageSwitcherDirective } from './directives/language-switcher.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { NotFound } from './components/not-found/not-found.module';
import { DatepickerModule } from './components/datepicker/datepicker.module';
import { BonusListContainerModule } from './components/bonus-list-container/bonus-list-container.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CloseMenuDirective, LanguageSwitcherDirective],
  imports: [BonusListContainerModule, DatepickerModule, NotFound],
  exports: [
    BonusListContainerModule,
    DatepickerModule,
    NotFound,
    CloseMenuDirective,
    LanguageSwitcherDirective,
  ],
})
export class SharedModule {}
