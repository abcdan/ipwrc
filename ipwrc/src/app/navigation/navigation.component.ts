import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authentication/authservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthserviceService) { 
  }

  admin: boolean = false

  ngOnInit(): void {
    setInterval(() => {
      this.isAdmin()
    }, 5000)
    this.isAdmin()
  }

  isAdmin() {
    this.authService.check().subscribe((res: any)=> {
      this.admin = res.admin
    }, err => {

    })
  }

}
