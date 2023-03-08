import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.baseUrl}/all`);
  }

  getCountry(id: string): Observable<Country> {
    return this.http.get<Country>(`${environment.baseUrl}/alpha/${id}`);
  }
}
