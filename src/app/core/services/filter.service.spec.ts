// import { fakeAsync, TestBed, tick } from "@angular/core/testing";
// import { FilterService } from "./filter.service";
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { BonusesService } from "./bonuses.service";
// import { MockBonusesService } from './../../shared/mocks/services/mock-bonuses.service';
// import { EMPTY } from "rxjs/internal/observable/empty";
// import { expectedBonuses, BonusesVinnytsia as BonusesVinnitsa } from "src/app/shared/mocks/constants/mock-bonuses";
// import { asyncData } from "src/app/shared/mocks/mock-async-observable";
// import { Observable } from "rxjs";

// describe('FilterService', () =>  {

//   let filterService: FilterService;
//   let bonusesServiceSpy: jasmine.SpyObj<BonusesService>;

//   const MockFilterService: Partial<FilterService> = {
//     addSortToQuery(typeOfSort): string {
//       return typeOfSort;
//     },
//   };
//   beforeEach(() => {
    
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [
//         FilterService,
//         { provide: BonusesService, useValue: spy }
//       ],
//     });
//     filterService = TestBed.inject(FilterService);
//     bonusesServiceSpy = TestBed.inject(BonusesService) as jasmine.SpyObj<BonusesService>;
//   });

  
//   it('should be created', () => {
//     expect(filterService).toBeTruthy();
//    });

//   it('getBonuses should return stubbed value from a spy', () => {
    
//     bonusesServiceSpy.getBonuses().and.returnValue();
//     });

//     filterService.addCityToQuery('Vinnytsia')
//   })
//   //   expect(filterService.filterAppliedObserver()).toHaveBeenCalled();

//     // expect(bonusesServiceSpy.getBonuses.calls.count())
//     //   .toBe(1, 'spy method was called once');

//     // expect(bonusesServiceSpy.getBonuses.calls.mostRecent().returnValue)
//     //   .toBe(stubBonusesObs);
//   // });

// });

