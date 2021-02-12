import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { ChangeDetectorRef } from '@angular/core';
import { IUser } from '@interfaces/loginInterface';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BonusComponent implements OnInit {
  @Input() bonusButtonClick: () => void;
  @Input() bonus: IBonus;

  public isForm = false;
  public isModeratorOrAdmin = false;
  public user: IUser;

  constructor(private changeDetection: ChangeDetectorRef, private loginService: LoginService) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    if (this.user ?? false) {
      this.isModeratorOrAdmin = this.user.role === 'admin' || this.user.role === 'moderator';
    }
  }

  public onBonusButtonClick(): void {
    this.bonusButtonClick();
  }

  public closeRateForm(): void {
    this.isForm = false;
  }
}
