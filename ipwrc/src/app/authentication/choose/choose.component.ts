import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  ref: string = ''

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.ref === 'cart') {
        this.ref = 'cart'
      }
    });
  }

  toLogin() {
    if(this.ref) {
      this.router.navigate(['/auth/login?ref=' + this.ref])
    } else {
      this.router.navigate(['/auth/login'])
    }
  }

  toSignup() {
    if(this.ref) {
      this.router.navigate(['/auth/signup?ref=' + this.ref])
    } else {
      this.router.navigate(['/auth/signup'])
    }
  }
}
