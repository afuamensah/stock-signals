import { Injectable } from '@angular/core';
import { Signal } from './signals';
import { SIGNALS } from './mock-signals';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  getSignals(): Observable<Signal[]> {
    return of(SIGNALS);
  }
  getSignal(id: number): Observable<Signal> {
    return of(SIGNALS.find(signal => signal.id === id));
  }

  onAdd(id: number): void {
    var addition = SIGNALS.find(signal => signal.id === id);
    addition.show = true;
  }

  constructor() { }
}
