import { Component, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { IUser } from '@interfaces/loginInterface';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-bonus-detail',
  templateUrl: './bonus-detail.component.html',
  styleUrls: ['./bonus-detail.component.scss'],
})
export class BonusDetailComponent implements OnInit {
  @Input() public bonus: IBonus;

  public user: IUser;
  public isModeratorOrAdmin = false;
  constructor(private loginService: LoginService) {}

  public ngOnInit(): void {
    this.user = this.loginService.getUser();
    if (this.user ?? false) {
      this.isModeratorOrAdmin = this.user.role === 'admin' || this.user.role === 'moderator';
    }
  }

  public writeEmail(): boolean {
    // TODO: create email and send to user and vendor
    return true;
  }

  public writeToUserHistory(): boolean {
    // TODO: save bonus to user history
    return true;
  }

  public apply(): void {
    this.writeEmail();
    this.writeToUserHistory();
  }
}
