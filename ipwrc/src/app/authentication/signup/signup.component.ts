import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup | any
  constructor() { 
    this.registerForm = new FormGroup({
      data: new FormGroup({
        userName: new FormControl(null, [Validators.required]),
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        street: new FormControl(null, [Validators.required]),
        streetNumber: new FormControl(null, [Validators.required]),
        postalCode: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required])
      })

    })
  }

  ngOnInit(): void {}

  submit() {

  }

  changeLabelColor(formControlName: string): string {
      const errorColor = 'color: #E74C3C;';
      const defaultColor = 'color: #000000;';
      return !this.registerForm.get(formControlName).valid && this.registerForm.get(formControlName).touched ? errorColor : defaultColor;
  }
}
