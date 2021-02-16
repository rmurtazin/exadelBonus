import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { MockBonusService } from 'src/app/shared/mocks/services/mock-bonus.service';
import { MarkerModel } from './marker.model';

describe('MarkerModel', () => {
    let markerModel: MarkerModel;
    let injector: Injector;
    let factory: ComponentFactoryResolver;
    let bonusService: MockBonusService;

    beforeEach(() => {
        markerModel = new MarkerModel(injector, factory);
        bonusService = new MockBonusService();
    });

    it('#getUserMarkerIco', () => {
        const bonuses: IBonus[] = bonusService.getMockBonuses();
        expect(markerModel.createBonusesMarkers(bonuses));
    });

    afterAll(() => {
        markerModel = null;
        injector = null;
        factory = null;
    });
});
