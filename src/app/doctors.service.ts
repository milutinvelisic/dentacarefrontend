import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Doctors } from './models/doctors.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }
  getDoctorsData(): Observable<Doctors[]> {
    return this._http.get<Doctors[]>('../assets/data/doctors.json').pipe(
      catchError(error => {
        return throwError(error.error);
      })
    );
  }
}
