import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuHide = true;
  name = 'Ivan';
  surname = 'Ivanov';
  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }
}
