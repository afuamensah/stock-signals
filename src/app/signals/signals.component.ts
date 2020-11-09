import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements OnInit {

  signals = [
    {sName: 'GBP/USD', rate: '(+0.02%)', slName:'British Pound/US Dollar', price: 1.2860},
    {sName: 'EUR/USD', rate: '(+0.07%)', slName:'Euro/US Dollar', price: 1.17475},
    {sName: 'AUD/USD', rate: '(+0.09%)', slName:'Australian Dollar/US Dollar', price: 0.71343}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
