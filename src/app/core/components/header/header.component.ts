import {Component, OnInit} from '@angular/core';
import {LoginService} from '@services/login.service';
import { IUser } from '@interfaces/loginInterface';
import { Languages } from '../../enums/languages.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  public language = Languages.English;
  isMenuHide = true;
  user: IUser;
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }

  public logout(): void{
    this.loginService.logout();
  }
}
