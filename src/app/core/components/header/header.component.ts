import { Component, OnInit } from '@angular/core';
import { LoginService } from '@services/login.service';
import { IUser } from '@interfaces/loginInterface';
import { Languages } from '../../enums/languages.enum';
import { Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public language = localStorage.getItem('language') || Languages.English;
  public currentRoute: string;
  public ifShowMenuButtons: boolean;
  isMenuHide = true;
  user: IUser;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private translate: TranslateService,
  ) {
    route.events
      .pipe(filter((event: Event): event is RouterEvent => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
        this.ifShowMenuButtons = this.checkRoute();
      });
  }
  ngOnInit(): void {
    this.user = this.loginService.getUser();
    this.translate.use(this.language);
  }
  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }

  public checkRoute(): boolean {
    const checkRoutes: (string|RegExp)[] = [/home$/, /history$/, /statistics$/, /\/bonuses\/[^/]+$/, /bonuses$/];
    return checkRoutes.some((item) => {
      return this.currentRoute.match(item) !== null;
    });
  }

  public logout(): void {
    this.loginService.logout();
  }
}
