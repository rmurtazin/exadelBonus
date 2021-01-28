import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Languages } from 'src/app/core/enums/languages.enum';


@Directive({
  selector: '[appLanguageSwitcher]',
})
export class LanguageSwitcherDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  clickEvent(): void {
    const selectedLanguage = this.elementRef.nativeElement.textContent === Languages.English ? Languages.Russian : Languages.English;
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      selectedLanguage
    );
  }
}
