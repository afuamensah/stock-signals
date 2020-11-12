import { Component, OnInit, Input } from '@angular/core';
import { Signal } from '../signals';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SignalService } from '../signal.service';

@Component({
  selector: 'app-s-details',
  templateUrl: './s-details.component.html',
  styleUrls: ['./s-details.component.css']
})


export class SDetailsComponent implements OnInit {

  @Input() signal: Signal;

  constructor(
    private route: ActivatedRoute,
    private signalService: SignalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSignal();
  }

  getSignal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.signalService.getSignal(id)
      .subscribe(signal => this.signal = signal);
  }

  goBack(): void {
    this.location.back();
  }

}
