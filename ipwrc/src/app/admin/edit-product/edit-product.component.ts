import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editForm: FormGroup | any
  error: string = ''

  constructor(private authService: AuthserviceService,
    private router: Router) { 
    this.editForm = new FormGroup({
      data: new FormGroup({
        slug: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
        image: new FormControl(null, [Validators.required]),
      })

    })
  }

  ngOnInit() {

  }

  submit() {

  }

  changeLabelColor(formControlName: string): string {
      const errorColor = 'color: #E74C3C;';
      const defaultColor = 'color: #000000;';
      return !this.editForm.get(formControlName).valid && this.editForm.get(formControlName).touched ? errorColor : defaultColor;
  }
}
