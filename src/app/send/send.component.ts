import { Component, OnInit, Input } from '@angular/core';
import { Signal } from '../signals/signals';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SignalService } from '../signals/signal.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  @Input() signal: Signal;

  allowSend = false;
  constructor(
    private route: ActivatedRoute,
    private signalService: SignalService,
    private location: Location
  ) {
    setTimeout(() => {this.allowSend = true;}, 2000);
  }

  sentMessage = '';
    onSend() {
      this.sentMessage = 'Signal has been sent.';
    }

    signalEmail = '';
    onSearchEmail(email:Event) {
      this.signalEmail =  (<HTMLInputElement>email.target).value;
    }

  ngOnInit(): void {
    this.getSignal();
  }

  getSignal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.signalService.getSignal(id)
      .subscribe(signal => this.signal = signal);
  }

}
