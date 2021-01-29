import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Languages } from 'src/app/core/enums/languages.enum';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appLanguageSwitcher]',
})
export class LanguageSwitcherDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService
  ) {}

  @HostListener('click', ['$event'])
  clickEvent(): void {
    const selectedLanguage = this.elementRef.nativeElement.textContent === Languages.English ? Languages.Russian : Languages.English;
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      selectedLanguage
    );
    this.translate.use(selectedLanguage);

  }
}
