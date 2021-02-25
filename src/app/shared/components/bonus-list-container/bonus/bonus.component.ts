import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
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
export class BonusComponent implements OnInit, OnChanges {
  @Input() bonusButtonLabel: string;
  @Input() bonus: IBonus;
  @Input() ifBonusFromMap: boolean;
  @Output() bonusButtonClickedEvent = new EventEmitter<BonusComponent>();

  public isForm = false;
  public isModeratorOrAdmin = false;
  public user: IUser;

  constructor(private loginService: LoginService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    if (this.user ?? false) {
      this.isModeratorOrAdmin = this.user.role === 'admin' || this.user.role === 'moderator';
    }
  }

  public ngOnChanges(): void {
    this.scrollToBonusMap();
  }

  public bonusButtonClick(): void {
    this.bonusButtonClickedEvent.emit(this);
  }

  public closeRateForm(): void {
    this.isForm = false;
  }

  public scrollToBonusMap(): void {
    if (this.ifBonusFromMap) {
      this.elementRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }
}
