import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Prices } from './models/prices.model';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  private _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }
  getPriceData(): Observable<Prices[]> {
    return this._http.get<Prices[]>('../assets/data/prices.json').pipe(
      catchError(error => {
        return throwError(error.error);
      })
    );
  }
}
