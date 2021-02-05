import { ToasterService } from '@services/toaster.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';

@Component({
  selector: 'app-bonus-list-container',
  templateUrl: './bonus-list-container.component.html',
  styleUrls: ['./bonus-list-container.component.scss'],
  providers: [BonusesService],
})
export class BonusListContainerComponent implements OnInit, OnDestroy {

  public bonusMap: IBonus;
  public bonuses: IBonus[] = [];
  private subscriptionBonuses : Subscription;
  private subscriptionBonusMap : Subscription;

  constructor(
    public bonusesService: BonusesService,
    public toasterService: ToasterService 
  ) {}

  public ngOnInit(): void {
    this.getBonuses();
  }

  public getBonuses(): void {
    this.subscriptionBonuses = this.bonusesService.getBonuses().subscribe(
      (data: IBonus[]) => {
        if (data) {
          this.bonuses = data;
        }
      },
      (err) => this.toasterService.showError(err, 'BonusListContainerComponent')
    );
  }

 public getBonusMap(): void {
   this.subscriptionBonusMap = this.bonusesService.getBonusFromMap().subscribe(
     (bonus: IBonus)=>{
      if (bonus) {
      this.bonusMap = bonus;
      }
    });
 }

  public ngOnDestroy(): void {
    this.subscriptionBonuses.unsubscribe();
    this.subscriptionBonusMap.unsubscribe();
  }
  
}
