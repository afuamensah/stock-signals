import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../must-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  //allowSignUp = false;

  constructor(private formBuilder: FormBuilder) {
    //setTimeout(() => {this.allowSignUp = true;}, 2000);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
        }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }
  get f() { return this.registerForm.controls; }

    registerMessage = '';
    
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        this.registerMessage = 'You have successfully registered.';
    }

}
