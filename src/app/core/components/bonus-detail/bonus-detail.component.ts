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

  user: IUser;
  isModeratorOrAdmin = false;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    if (this.user !== null) {
      if (this.user.role === 'moderator' || this.user.role === 'admin') {
        this.isModeratorOrAdmin = true;
      }
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
