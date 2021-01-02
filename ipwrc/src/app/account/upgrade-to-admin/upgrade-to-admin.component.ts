import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';

@Component({
  selector: 'app-upgrade-to-admin',
  templateUrl: './upgrade-to-admin.component.html',
  styleUrls: ['./upgrade-to-admin.component.css']
})
export class UpgradeToAdminComponent implements OnInit {


  upgradeForm: FormGroup | any
  error: string = ''

  constructor(private authService: AuthserviceService,
    private router: Router) { 
    this.upgradeForm = new FormGroup({
      data: new FormGroup({
        upgradeToken: new FormControl(null, [Validators.required]),
      })

    })
  }

  ngOnInit(): void {}

  submit() {
    if(this.upgradeForm.status === "INVALID") {
      this.error = 'You didn\'t correctly fill in the form, try again..'
      return
    }
    this.authService.upgradeToAdmin(this.upgradeForm.value['data']['upgradeToken']).subscribe(res => {
      this.error = ''
      this.router.navigate(['/account'])
      
    }, err => {
      this.error = 'Whoops! That doesn\'t look like the right upgrade key to me...'
    })

  }

  changeLabelColor(formControlName: string): string {
      const errorColor = 'color: #E74C3C;';
      const defaultColor = 'color: #000000;';
      return !this.upgradeForm.get(formControlName).valid && this.upgradeForm.get(formControlName).touched ? errorColor : defaultColor;
  }
}
