import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private readonly _isLoading = new Subject<boolean>();

  readonly isLoading$: Observable<boolean> = this._isLoading.asObservable();

  loadingOn() {
    this._isLoading.next(true);
  }

  loadingOff() {
    this._isLoading.next(false);
  }
}
