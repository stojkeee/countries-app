import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, shareReplay, startWith, switchMap } from 'rxjs';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryCardComponent } from '../../components/country-card/country-card.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  imports: [
    CommonModule,
    MatInputModule,
    CountryCardComponent,
    ReactiveFormsModule,
  ],
})
export class CountriesComponent implements OnInit {
  search = new FormControl('');
  filterdCountries$: Observable<Country[]> = this.countriesService
    .getAllCountries()
    .pipe(shareReplay());
  counties$: Observable<Country[]> = this.filterdCountries$;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.filterdCountries$ = this.search.valueChanges.pipe(
      startWith(''),
      switchMap((search) => {
        if (search) {
          return this.counties$.pipe(
            map((countries) => {
              return countries.filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
              );
            })
          );
        } else {
          return this.counties$;
        }
      })
    );
  }
}
