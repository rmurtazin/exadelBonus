import {ChangeDetectionStrategy, Component, Input, OnDestroy} from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BonusComponent implements OnDestroy {
  @Input() func: () => void;
  @Input() bonus: IBonus;

  public isForm = false;
  private newBonusSub: Subscription;

  constructor() {
  }

  ngOnDestroy(): void {
    this.newBonusSub?.unsubscribe();
  }

  public onBonusButtonClick(): any {
    this.func();
  }

  public updateBonus(newBonusObservable: Observable<IBonus>): void {
    this.newBonusSub = newBonusObservable.subscribe((newBonus: IBonus) => {
      this.bonus = newBonus;
    });
    this.isForm = false;
  }
}
