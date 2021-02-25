import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '@services/login.service';
import { IUser } from '@interfaces/loginInterface';
import { Languages } from '../../enums/languages.enum';
import { Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public language = localStorage.getItem('language') || Languages.English;
  public currentRoute: string;
  public ifShowMenuButtons: boolean;
  public isMenuHide = true;
  public user: IUser;
  private userSybscription: Subscription;

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
    this.getUser();
    this.translate.use(this.language);
  }

  private getUser(): void {
    this.userSybscription = this.loginService.getUser().subscribe((user) => {
      this.user = user;
    });
  }
  public toggleMenu(): void {
    this.isMenuHide = !this.isMenuHide;
  }

  public checkRoute(): boolean {
    const checkRoutes: (string | RegExp)[] = [
      /home$/,
      /history$/,
      /statistics$/,
      /\/bonuses\/[^/]+$/,
      /bonuses$/,
    ];
    return checkRoutes.some((item) => {
      return this.currentRoute.match(item) !== null;
    });
  }

  public logout(): void {
    this.loginService.logout().subscribe(() => {
      this.route.navigate(['/login']);
    });
  }

  public ngOnDestroy(): void {
    this.userSybscription.unsubscribe();
  }
}
