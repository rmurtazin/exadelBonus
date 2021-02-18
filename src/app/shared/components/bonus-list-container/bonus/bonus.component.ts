import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { IUser } from '@interfaces/loginInterface';
import { LoginService } from '@services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BonusComponent implements OnInit {
  @Input() bonus: IBonus;

  public isForm = false;
  public isModeratorOrAdmin = false;
  public user: IUser;
  public isParentHome = false;
  public isParentHistory = false;
  public isParentBonuses = false;


  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    if (this.user ?? false) {
      this.isModeratorOrAdmin = this.user.role === 'admin' || this.user.role === 'moderator';
    }
    this.checkParentComponent();
  }

  private checkParentComponent(): void {
    const currentComponent = this.router.url.split('/')[1];
    switch (currentComponent) {
      case 'home': this.isParentHome = true; break;
      case 'history': this.isParentHistory = true; break;
      case 'bonuses': this.isParentBonuses = true; break;
      default: break;
    }
  }

  public closeRateForm(): void {
    this.isForm = false;
  }

  public openApplyForm(): void {
    // TODO: open apply form
  }

  public openRateForm(): void {
    this.isForm = true;
  }
}
