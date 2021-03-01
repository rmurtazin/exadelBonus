import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '@services/login.service';
import { IUser } from '@interfaces/loginInterface';
import { Languages } from '../../enums/languages.enum';
import { Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { RoleType } from '../../services/constants';

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
  private userSubscription: Subscription;
  public roleType = RoleType;

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
        if (this.ifShowMenuButtons) {
          this.getUser();
        }
      });
  }
  ngOnInit(): void {
    this.translate.use(this.language);
  }

  private getUser(): void {
    if (this.loginService.getToken()) {
      this.userSubscription = this.loginService.getUser().subscribe((user) => {
        this.user = user;
      });
    }
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
    this.loginService.logout().subscribe(
      () => {
        this.route.navigate(['/login']);
      },
      () => this.route.navigate(['/login']),
    );
  }

  public hasRole(role: string): boolean {
    return this.loginService.getRole() === role;
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
