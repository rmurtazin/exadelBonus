import { Component } from '@angular/core';
import {LoginService} from '@services/login.service';
import { IUser } from '@interfaces/loginInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuHide = true;
  user: IUser;
  constructor(private loginService: LoginService) {
    this.user = this.loginService.getUser();
  }
  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }
}
