import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {CountriesService} from "../../services/countries.service";
import {Observable} from "rxjs";
import {Country} from "../../models/country.interface";
import {CommonModule} from "@angular/common";
import {CountryCardComponent} from "../../components/country-card/country-card.component";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, MatInputModule, CountryCardComponent],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent {
  countries$: Observable<Country[]> = this.countriesService.getAllCountries()
  constructor(private countriesService: CountriesService) {
  }
}
