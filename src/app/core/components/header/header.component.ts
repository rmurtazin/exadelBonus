import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuHide = true;
  firstName = 'Ivan';
  lastName = 'Ivanov';
  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }
  public hideMenu(): void {
    this.isMenuHide = true;
  }
}
