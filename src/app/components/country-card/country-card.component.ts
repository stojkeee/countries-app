import {Component, Input} from '@angular/core';
import {Country} from "../../models/country.interface";


@Component({
  selector: 'app-country-card',
  standalone: true,
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {
  @Input() data!: Country

  constructor() {
  }

}
