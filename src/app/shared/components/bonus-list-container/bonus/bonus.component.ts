import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { IUser } from '@interfaces/loginInterface';
import { LoginService } from '@services/login.service';

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
  private currentComponent: HTMLElement;
  private isParent = {
    'APP-HOME': false,
    'APP-ADD-BONUS': false,
    'APP-HISTORY': false,
  };

  constructor(private loginService: LoginService, private ref: ElementRef) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    this.currentComponent = this.ref.nativeElement;
    if (this.user ?? false) {
      this.isModeratorOrAdmin = this.user.role === 'admin' || this.user.role === 'moderator';
    }
    console.log(this.user);
    this.findParentElement();
  }

  private findParentElement(): void {
    while (!Object.keys(this.isParent).includes(this.currentComponent.tagName)) {
      this.currentComponent = this.currentComponent.parentElement;
    }
    this.isParent[this.currentComponent.tagName] = true;
  }

  public closeRateForm(): void {
    this.isForm = false;
  }

  public applyBonus(): void {
    // TODO: open apply form
  }

  public openRateForm(): void {
    this.isForm = true;
  }
}
