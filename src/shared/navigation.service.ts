import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Nav } from 'src/app/models/nav.model';


@Injectable({
  providedIn: 'root'
})
export class Navigation {
  // tslint:disable-next-line: variable-name
  private _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }
  getNavData(): Observable<Nav[]> {
    return this._http.get<Nav[]>('../assets/data/nav.json').pipe(
      catchError(error => {
        return throwError(error.error);
      })
    );
  }
}
