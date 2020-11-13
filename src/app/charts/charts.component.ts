import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class AppComponent implements OnInit {
  // imgSrc1: string;
  // imgSrc2: string;
  // imgSrc3: string;


  signals = [
    {sName: 'GBP/USD', rate: '(+0.02%)', slName:'British Pound/US Dollar', price: 1.2860, img: 'https://www.tradingview.com/x/q6VM9yQ4/'},
    {sName: 'EUR/USD', rate: '(+0.07%)', slName:'Euro/US Dollar', price: 1.17475, img: 'https://www.tradingview.com/x/XxvkuUZO/'},
    {sName: 'AUD/USD', rate: '(+0.09%)', slName:'Australian Dollar/US Dollar', price: 0.71343, img: 'https://www.tradingview.com/x/gMlAwT0o/'}
  ];

  constructor() { }
  ngOnInit(): void {
    // this.imgSrc1 = 'https://www.tradingview.com/x/q6VM9yQ4/'
    // this.imgSrc2 = 'https://www.tradingview.com/x/XxvkuUZO/'
    // this.imgSrc3 = 'https://www.tradingview.com/x/gMlAwT0o/'
  }
}
