import { ToasterService } from './../../services/toaster.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBonus } from '../../interfaces/bonus.interface';
import { BonusesService } from '../../services/bonuses.service';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bonus-list',
  templateUrl: './bonus-list.component.html',
  styleUrls: ['./bonus-list.component.scss'],
  providers: [BonusesService],
})
export class BonusListComponent implements OnInit, OnDestroy {
  public bonusMap: IBonus;
  public bonuses: IBonus[] = [];
  private subscription = new Subscription();

  constructor(
    public bonusesService: BonusesService,
    public toasterService: ToasterService
  ) {}

  public ngOnInit(): void {
    this.getBonuses();
  }

  public getBonuses(): void {
    this.bonusesService.getBonuses().subscribe(
      (data: IBonus[]) => {
        if (data) {
          this.bonuses = data;
        }
      },
      (err) => this.toasterService.showError(err, 'BonusListComponent')
    );
  }

  ngOnChanges(changes: SimpleChanges) {
  
    if (changes['bonusFromMap']) {
        this.bonusMap = this.bonusesService.showBonusFromMap();
    }
}

  public getBonusFromMap(): void{
    if (this.bonusesService.showBonusFromMap()) {
    this.bonusMap =  this.bonusesService.showBonusFromMap();
    }
    console.log(this.bonusMap, 'get')
  }
 
  public trackById(index: number, item: IBonus): number {
      return item.id;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
