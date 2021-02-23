import { ApiService } from './../api.service';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { asyncData, asyncError } from '../../../shared/mocks/mock-async-observable';
import { expectedBonuses } from '../../../shared/mocks/constants/bonuses';
import { IBonus } from '../../interfaces/bonus.interface';
import { BonusesService } from '../bonuses.service';
import { ToasterService } from '../toaster.service';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

describe('BonusesService', () => {
  let bonusesService: BonusesService;
  // const MockApiService: Partial<ApiService> = {
  //   get(url: string): any {
  //     return expectedBonuses;
  //   },
  // };
  // const MockToasterService: Partial<ToasterService> = {
  //   showShow(): void {
  //     console.log('toastr');
  //   },
  // };
  // let mockApiService: any;
  // let mockToasterService: any;


  let ApiServiceSpy: { get: jasmine.Spy };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        BonusesService,
        { provide: ApiService },
        { provide: ToasterService }
      ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ]
    });
    ApiServiceSpy = jasmine.createSpyObj('ApiService', ['get']);
    bonusesService =  new BonusesService(<any> ApiService, <any> ToasterService); 
  });

  it('should be created', () => {
    expect(bonusesService).toBeTruthy();
  });

  it('should return expected bonuses', () => {
    ApiServiceSpy.get.and.returnValue(of(expectedBonuses));
    bonusesService.getBonuses().subscribe(data => 
      expect(data).toEqual(expectedBonuses, 'expected bonuses'),
      fail
    )      
  });
})
