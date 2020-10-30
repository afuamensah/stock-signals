import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  allowSend = false;
  constructor() {
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
  }

}
