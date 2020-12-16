import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  allowSignUp = false;

  constructor() {
    setTimeout(() => {this.allowSignUp = true;}, 2000);
  }

  ngOnInit(): void {
  }



}
