import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServicesType } from './models/servicestype.model';

@Injectable({
  providedIn: 'root'
})
export class ServicestypeService {

  private _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }
  getNavData(): Observable<ServicesType[]> {
    return this._http.get<ServicesType[]>('../assets/data/servicestype.json').pipe(
      catchError(error => {
        return throwError(error.error);
      })
    );
  }
}
