import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { LoginService } from '@services/login.service';
import { IUser } from '@interfaces/loginInterface';
import { Languages } from '../../enums/languages.enum';
import { Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  public language = Languages.English;
  public currentRoute: string;
  public ifShowMenuButtons: boolean;
  isMenuHide = true;
  user: IUser;

  constructor(private loginService: LoginService, private route: Router) {
    route.events
      .pipe(filter((event: Event): event is RouterEvent => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

  public ngAfterContentChecked(): void {
    this.ifShowMenuButtons = !this.checkRoute();
  }

  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }
  public checkRoute(): boolean {
    let allChildrenRoutes: string[];
    let checkRoutes: string[];
    this.route.config.forEach((route) => {
      if (route.canActivateChild) {
        allChildrenRoutes = route.children.map((element) => element.path);
        checkRoutes = allChildrenRoutes.filter((routeItem) => routeItem !== '')
          .map((pathItem) => '/' + pathItem);
      }
    });
    return checkRoutes.includes(this.currentRoute);
  }

  public logout(): void {
    this.loginService.logout();
  }
}
