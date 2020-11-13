import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  signals = [
    {newSignal: 'New Signal', pair: 'EUR/USD', action:'Sell', price: 1.2345, SL: 1.2345, TP: 1.2345}
  ];

  constructor() { }
  ngOnInit(): void {
  }
}
