import { Injectable } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MarkerEventsService{
    private subject = new Subject<any>();

    public sendClickEvent($event, office: IOffice): void {
        this.subject.next({$event, office});
    }

    public getClickEvent(): Observable<any>{
        return this.subject.asObservable();
    }
}
