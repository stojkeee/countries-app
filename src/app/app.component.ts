import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressBarModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {}
}
