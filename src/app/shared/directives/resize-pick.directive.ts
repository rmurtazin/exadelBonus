import {
  Directive,
  Input,
  HostListener,
  ViewContainerRef,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { widthBreakpoints } from './../../core/services/constants';
@Directive({
  selector: '[appResizePick]',
})
export class ResizePickDirective implements AfterViewInit {
  @Input('appResizePick') configWidth: string;
  public width: number = window.innerWidth;

  constructor(public viewContainerRef: ViewContainerRef, public elementRef: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.width = event.target.visualViewport.width;
    this.displayElement();
  }

  public ngAfterViewInit(): void {
    this.displayElement();
  }

  public displayElement(): void {
    if (!this.isValidSize()) {
      const el: HTMLElement = this.elementRef.nativeElement;
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  }

  public isValidSize(): boolean {
    if (this.configWidth === 'mobile') {
      return this.width < widthBreakpoints.tablet;
    }
    if (this.configWidth === 'desktop') {
      return this.width >= widthBreakpoints.tablet;
    }
  }
}
