import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToFirst]',
})
export class ScrollToFirstDirective implements AfterViewInit{
  @Input('appScrollToFirst') scrollToFirst: boolean;

  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit() {
    if (this.scrollToFirst) {
      console.log('have to');
      this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }
}
