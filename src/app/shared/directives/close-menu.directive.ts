import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appCloseMenu]',
})
export class CloseMenuDirective {
  @Output() clickMenuItem: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }
  @HostListener('click', ['$event'])
  onClick(e): void {
    if (e.target.parentElement.classList.value === 'menu-item') {
      this.clickMenuItem.emit();
    }
  }
}
