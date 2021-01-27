import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLanguageSwitcher]',
})

export class LanguageSwitcherDirective {
  private currentLanguage: string;
  private changedLanguage: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  clickEvent(): void {
    this.currentLanguage = this.elementRef.nativeElement.value;
    this.changedLanguage = this.currentLanguage === 'EN' ? 'RU' : 'EN';
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'value',
      this.changedLanguage
    );
  }
}
