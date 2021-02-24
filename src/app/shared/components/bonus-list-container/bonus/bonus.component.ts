import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
  @Input() bonusButtonLabel: string;
  @Input() bonus: IBonus;
  @Input() ifBonusFromMap: boolean;

  @Output() bonusButtonClickedEvent = new EventEmitter<BonusComponent>();

  public isForm = false;
  public isModeratorOrAdmin = false;
  public user: IUser;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getUser().subscribe((user: IUser) => {
      const [role] = user.roles;
      this.user = user;
      this.isModeratorOrAdmin = role === 'admin' || role === 'moderator';
    });
  }

  public bonusButtonClick(): void {
    this.bonusButtonClickedEvent.emit(this);
  }

  public closeRateForm(): void {
    this.isForm = false;
  }
}
