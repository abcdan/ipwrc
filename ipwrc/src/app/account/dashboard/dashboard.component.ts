import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: boolean = false

  constructor(private authService: AuthserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.isAdmin()
  }

  signout() {
    this.authService.signOut()
    this.router.navigate(['/auth/choose'])
  }

  toAdmin() {
    this.router.navigate(['/admin'])
  }

  isAdmin() {
    this.authService.check().subscribe((res: any)=> {
      this.admin = res.admin
    }, err => {

    })
  }

}
