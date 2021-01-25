import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){}

    public get(url: string): Observable<any>{
        return this.http.get(url);
    }

    public post(url: string, body: any, options?: any): Observable<any>{
        return this.http.post(url, body, options);
    }

    public put(url: string, body: any, options?: any): Observable<any>{
        return this.http.put(url, body, options);
    }

    public delete(url: string, options?: any): Observable<any>{
        return this.http.delete(url, options);
    }
}
