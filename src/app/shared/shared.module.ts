import { RouterModule } from '@angular/router';
import { LanguageSwitcherDirective } from './directives/language-switcher.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CloseMenuDirective, LanguageSwitcherDirective],
  imports: [RouterModule],
  exports: [CloseMenuDirective, LanguageSwitcherDirective, RouterModule],
})
export class SharedModule {}
