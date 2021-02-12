import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherDirective } from './directives/language-switcher.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { NgModule } from '@angular/core';
import { ResizePickDirective } from './directives/resize-pick.directive';


@NgModule({
  declarations: [CloseMenuDirective, LanguageSwitcherDirective, ResizePickDirective],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    CloseMenuDirective,
    LanguageSwitcherDirective,
    ResizePickDirective,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class SharedModule {}
