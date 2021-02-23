import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}
  public headers: any = new HttpHeaders().set('Content-Type', 'application/json');

  public get(url: string, query?: string): Observable<any> {
    return this.http.get(`${url}${query || ''}`).pipe(catchError(this.errorHandler));
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body, { headers: this.headers }).pipe(catchError(this.errorHandler));
  }

  public put(url: string, body?: any): Observable<any> {
    return this.http.put(url, body, { headers: this.headers }).pipe(catchError(this.errorHandler));
  }

  public delete(url: string, options?: any): Observable<any> {
    return this.http.delete(url, options).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: any): ObservableInput<any> {
    const errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
    } else {
      // server-side error
    }
    return throwError(errorMessage);
  }
}
