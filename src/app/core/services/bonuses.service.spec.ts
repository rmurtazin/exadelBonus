import { TestBed } from "@angular/core/testing";
import { BonusesService } from "./bonuses.service";
import { asyncData, asyncError } from "./../../shared/mocks/mock-async-observable";

describe('BonusesService', () =>  {
  let apiSpy: { get: jasmine.Spy };
  let toastrServiceSpy = { show: jasmine.Spy };
  let bonusesService: BonusesService;

  beforeEach(() => {
    apiSpy = jasmine.createSpyObj('ApiService', ['get']);
    
    toastrServiceSpy = jasmine.createSpyObj('ToasterService', ['showShow'])
    bonusesService = new BonusesService(apiSpy as any, );
  });

  it('should use BonusesService', () => {
    let service = TestBed.inject(BonusesService);
    expect(service.getBonuses()).toHaveBeenCalled();
  });

});
