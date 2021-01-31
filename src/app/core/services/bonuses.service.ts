import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BonusesService {
  constructor(private http: HttpClient) {}

  public getBonuses(): Observable<any> {
    return this.http.get('../../../assets/static/bonuses.json');
  }
}
