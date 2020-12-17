import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  signals = [
    {flagImage: 'https://img.icons8.com/color/48/000000/great-britain-circular.png', sName: 'GBP/USD', rate: '(+0.02%)', slName:'British Pound/US Dollar', price: 1.2860, img: 'https://www.tradingview.com/x/q6VM9yQ4/'},
    {flagImage: 'https://img.icons8.com/color/48/000000/japan-circular.png', sName: 'EUR/JPY', rate: '(+0.07%)', slName:'US Dollar/Japanese Yen', price: 1.17475, img: 'https://www.tradingview.com/x/mtUyV3A7/'},
    {flagImage: 'https://img.icons8.com/color/48/000000/australia-circular.png', sName: 'AUD/USD', rate: '(+0.09%)', slName:'Australian Dollar/US Dollar', price: 0.71343, img: 'https://www.tradingview.com/x/gMlAwT0o/'}
  ];

  constructor() { }
  ngOnInit(): void {
  }
}
