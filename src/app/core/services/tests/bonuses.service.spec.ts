import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from '../../../shared/mocks/mock-async-observable';
import { expectedBonuses } from '../../../shared/mocks/constants/bonuses';
import { IBonus } from '../../interfaces/bonus.interface';
import { BonusesService } from '../bonuses.service';
import { ToasterService } from '../toaster.service';

describe('BonusesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ BonusesService ]
    });

    let bonusesService: BonusesService = TestBed.inject(BonusesService)


    it('should be OK returning no bonuses',  (done: DoneFn) => {
      bonusesService.getBonuses().subscribe((data) => {
        expect(data).toBe(expectedBonuses);
        done();
      });
      bonusesService.getBonuses();
    
    
    
    // () => {
    //   spyOn(bonusesService, 'getBonuses').and.callThrough()
    //   let a = bonusesService.getBonuses();

    //   expect(a).toBe(expectedBonuses, 'should be expectedBonuses')

      // bonusesService.getBonuses().subscribe(
      //   bonuses => expect(bonuses.length).toEqual(5, 'should have empty bonuses array'),
      //   fail
      // );

    });
  });
})
