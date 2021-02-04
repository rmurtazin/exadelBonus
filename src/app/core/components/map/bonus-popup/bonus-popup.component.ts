import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bonus-popup',
  templateUrl: './bonus-popup.component.html',
  styleUrls: ['./bonus-popup.component.scss'],
})
export class BonusPopupComponent implements OnInit, OnDestroy {
  @Input() public bonus: IBonus;
  @Input() public latitude: number;
  @Input() public longitude: number;
  public markerLink: string;
  private subscription = new Subscription();

  constructor(private translate: TranslateService, private changeDetector: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.markerLink = `http://localhost:4200/home/?lat=${this.latitude}&lon=${this.longitude}`;
    this.runChangeDetection();
    this.subscription.add(
      this.translate.onLangChange.subscribe(() => {
        this.runChangeDetection();
      }),
    );
  }

  private runChangeDetection(): void {
    this.changeDetector.detectChanges();
  }

  public log($event): void {
    console.log($event); // TODO: replace to coll popup method
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
