import { BonusesService } from '@services/bonuses.service';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BonusComponent implements OnChanges {
  @Input() visibleChangeStatusBtn: boolean;
  @Input() bonusButtonLabel: string;
  @Input() bonus: IBonus;
  @Input() ifBonusFromMap: boolean;
  @Output() bonusButtonClickedEvent = new EventEmitter<BonusComponent>();

  public isForm = false;

  constructor(private elementRef: ElementRef, private bonusesService: BonusesService) {}

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

  public changeStatus(): void {
    this.bonus.isActive = !this.bonus.isActive;
    this.bonusesService.changeBonusStatus(this.bonus).subscribe();
  }
}
