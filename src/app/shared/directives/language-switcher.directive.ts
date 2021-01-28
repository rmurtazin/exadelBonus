import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Languages } from 'src/app/core/enums/languages.enum';


@Directive({
  selector: '[appLanguageSwitcher]',
})
export class LanguageSwitcherDirective {
  private currentLanguage: string;
  private changedLanguage: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  clickEvent(): void {
    this.currentLanguage = this.elementRef.nativeElement.textContent;
    this.changedLanguage = this.currentLanguage === Languages.english ? Languages.russian : Languages.english;
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      this.changedLanguage
    );
  }
}
