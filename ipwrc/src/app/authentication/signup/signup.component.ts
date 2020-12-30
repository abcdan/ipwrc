import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { user } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup | any
  error: string = ''

  constructor(private authService: AuthserviceService,
    private router: Router) { 
    this.registerForm = new FormGroup({
      data: new FormGroup({
        username: new FormControl(null, [Validators.required]),
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
    if(this.registerForm.status === "INVALID") {
      this.error = 'You didn\'t correctly fill in the form, try again..'
      return
    }
    console.log(this.registerForm.value['data'] as user)
    this.authService.signup(this.registerForm.value['data'] as user).subscribe(res => {
      this.error = ''
      this.router.navigate(['/account'])
      
    }, err => {
      this.error = 'Whoops! It looks like I couldn\'t create that account.'
    })
  }

  changeLabelColor(formControlName: string): string {
      const errorColor = 'color: #E74C3C;';
      const defaultColor = 'color: #000000;';
      return !this.registerForm.get(formControlName).valid && this.registerForm.get(formControlName).touched ? errorColor : defaultColor;
  }
}
