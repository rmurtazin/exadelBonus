import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCloseMenu]',
})
export class CloseMenuDirective {
  @Output() clickMenuItem = new EventEmitter<void>();
  constructor() {}
  @HostListener('click', ['$event'])
  public onClick(e): void {
    if (e.target.parentElement.classList.value === 'menu-item') {
      this.clickMenuItem.emit();
    }
  }
}
