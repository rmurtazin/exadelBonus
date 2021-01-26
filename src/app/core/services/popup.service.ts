import { Injectable } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';

@Injectable()
export class PopupService{
    public createOfficePopup(office: IOffice): string{
        return `
            <h1>${office.city}</h1>
            <p>${office.address}</p>
            <button>Перейти</button>
        `;
    }

    public createBonusPopup(bonus: IBonus): string{
        return `
            <h1>${bonus.type}</h1>
            <p>${bonus.description}</p>
            <button (click)="alert('hello')">Детали</button>
        `;
    }
}
