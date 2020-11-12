import { Component, OnInit } from '@angular/core';
import { Signal } from './signals';
import { SignalService } from './signal.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements OnInit {

  signals: Signal[];

  constructor(private signalService: SignalService) { }

  ngOnInit(): void {
    this.getSignals();
  }
  getSignals(): void {
    this.signalService.getSignals()
        .subscribe(signals => this.signals = signals);
  }

}
