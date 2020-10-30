import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allowLogin = false;

  constructor() {
    setTimeout(() => {this.allowLogin = true;}, 2000);
  }

  ngOnInit(): void {
  }

}
