import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuHide = true;
  firstName = 'Ivan';
  lastName = 'Ivanov';
  constructor() { }
  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }
  public hideMenu(): void {
    this.isMenuHide = true;
  }
}
