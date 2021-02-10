import { RouterModule } from '@angular/router';
import { LanguageSwitcherDirective } from './directives/language-switcher.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { NgModule } from '@angular/core';
import { ResizeDirective } from './directives/resize.directive';

@NgModule({
  declarations: [CloseMenuDirective, LanguageSwitcherDirective, ResizeDirective],
  imports: [RouterModule],
  exports: [CloseMenuDirective, LanguageSwitcherDirective, ResizeDirective, RouterModule],
})
export class SharedModule {}
