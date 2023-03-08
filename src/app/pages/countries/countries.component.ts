import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryCardComponent } from "../../components/country-card/country-card.component";

@Component({
    selector: 'app-countries',
    standalone: true,
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss'],
    imports: [CommonModule, MatInputModule, CountryCardComponent]
})
export class CountriesComponent {
  countries$: Observable<Country[]> = this.countriesService.getAllCountries();
  constructor(private countriesService: CountriesService) {}
}
