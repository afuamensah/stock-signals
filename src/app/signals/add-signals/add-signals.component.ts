import { Component, OnInit } from '@angular/core';
import { Signal } from '../signals';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-add-signals',
  templateUrl: './add-signals.component.html',
  styleUrls: ['./add-signals.component.css']
})
export class AddSignalsComponent implements OnInit {

  signals: Signal[];

  constructor(private signalService: SignalService) { }

  ngOnInit(): void {
    this.getSignals();
  }
  getSignals(): void {
    this.signalService.getSignals()
        .subscribe(signals => this.signals = signals);
  }
  
  onAdd(id: number): void {
    this.signalService.onAdd(id);
  }

}
