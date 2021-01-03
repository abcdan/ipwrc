import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { user } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ref: string = ''

  registerForm: FormGroup | any
  error: string = ''

  constructor(private authService: AuthserviceService,
    private router: Router,
    private route: ActivatedRoute) { 
      this.route.queryParams.subscribe(params => {
        if(params.ref === 'cart') {
          this.ref = 'cart'
        }
      })
    this.registerForm = new FormGroup({
      data: new FormGroup({
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
    this.authService.login(this.registerForm.value['data'] as user).subscribe(res => {
      this.error = ''
      if(this.ref === 'cart') {
        this.router.navigate(['/cart'])
      } else {
        this.router.navigate(['/account'])
      }
      
    }, err => {
      this.error = 'Whoops! It looks like I couldn\'t find that account.'
    })

  }

  changeLabelColor(formControlName: string): string {
      const errorColor = 'color: #E74C3C;';
      const defaultColor = 'color: #000000;';
      return !this.registerForm.get(formControlName).valid && this.registerForm.get(formControlName).touched ? errorColor : defaultColor;
  }

}
