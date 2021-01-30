import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBonus } from '../interfaces/bonus.interface';

@Injectable()
export class BonusesService {
  constructor(private http: HttpClient) {}

  public getBonuses(): any {
    return this.http.get('../../../assets/static/bonuses.json');
  }
}
