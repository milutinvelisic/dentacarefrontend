import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Testimony } from './models/testimony.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  private _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }
  getNavData(): Observable<Testimony[]> {
    return this._http.get<Testimony[]>('../assets/data/testimony.json').pipe(
      catchError(error => {
        return throwError(error.error);
      })
    );
  }
}
