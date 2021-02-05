import { Directive, HostListener, ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { Languages } from 'src/app/core/enums/languages.enum';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appLanguageSwitcher]',
})
export class LanguageSwitcherDirective implements OnInit, OnChanges {
  public initialLanguage = this.elementRef.nativeElement
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService,
  ) {}

  ngOnChanges (){
  
  }

  ngOnInit () {
  
  }

  @HostListener('click', ['$event'])
  clickEvent(): void {
    console.log(this.elementRef.nativeElement.textContent)
   
    const selectedLanguage =
      this.elementRef.nativeElement.textContent === Languages.Russian
        ? Languages.English
        : Languages.Russian;
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', selectedLanguage);
    this.translate.use(selectedLanguage);
  }
}
