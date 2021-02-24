import { ApiService } from './../api.service';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  bonusIDForTestGet,
  bonusIDForTestRemove,
  expectedBonus,
  expectedBonuses,
} from '../../../shared/mocks/constants/bonuses';
import { BonusesService } from '../bonuses.service';
import { ToasterService } from '../toaster.service';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { MockApiService } from 'src/app/shared/mocks/services/mock-api.service';

describe('BonusesService', () => {
  let bonusesService: BonusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BonusesService,
        { provide: ApiService, useValue: MockApiService },
        { provide: ToasterService },
      ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),
      ],
    });
    bonusesService = new BonusesService(MockApiService as any, ToasterService as any);
  });

  it('should be created', () => {
    expect(bonusesService).toBeTruthy();
  });

  it('should return right number od expected bonuses', fakeAsync(() => {
    bonusesService.getBonuses().subscribe((data) => {
      expect(data.length).toBeGreaterThanOrEqual(expectedBonuses.length);
    });
  }));

  it('should return expected bonus', fakeAsync(() => {
    bonusesService.getBonus(bonusIDForTestGet).subscribe((data) => {
      expect(data).toContain(expectedBonus);
    });
  }));

  it('should return bonuses without deleted bonus', fakeAsync(() => {
    bonusesService.removeBonus(bonusIDForTestRemove);
    bonusesService.getBonuses().subscribe((data) => {
      expect(data.length).toBeGreaterThan(expectedBonuses.length - 1);
    });
  }));
});
