import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product/product.service';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editForm: FormGroup | any
  error: string = ''
  productToEdit: Product | any

  constructor(private authService: AuthserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService) { 
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
    this.route.params.subscribe((params: any) => {
      this.productsService.getProduct(params['slug']).subscribe((res: any) => {
        this.productToEdit = res as Product
        console.log(this.productToEdit)
      }, err => {
        //  TODO add redirect
      })
    })
  }

  submit() {

  }

  changeLabelColor(formControlName: string): string {
      const errorColor = 'color: #E74C3C;';
      const defaultColor = 'color: #000000;';
      return !this.editForm.get(formControlName).valid && this.editForm.get(formControlName).touched ? errorColor : defaultColor;
  }
}
