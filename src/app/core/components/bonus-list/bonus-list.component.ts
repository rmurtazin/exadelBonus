import { Component, OnInit } from '@angular/core';
import { IBonus } from '../../interfaces/bonus.interface';
import { BonusesService } from '../../services/bonuses.service';
import { Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bonus-list',
  templateUrl: './bonus-list.component.html',
  styleUrls: ['./bonus-list.component.scss']
})
export class BonusListComponent implements OnInit {
  
  public bonuses: Observable<IBonus[]> = this.bonusesService.getBonuses();

  constructor(public bonusesService: BonusesService) {}
    
    ngOnInit () {
     this.onFilterType();
    }
    public onFilterType(){

    }
}
