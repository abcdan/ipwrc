import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @ViewChild('productForm') productForm: NgForm | undefined
  // editForm: FormGroup | any
  error: string = ''
  productToEdit: Product | undefined | any

  constructor(private authService: AuthserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService) { 
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.productsService.getProduct(params['slug']).subscribe((res: any) => {
        this.productToEdit = res as Product
      }, err => {
      })
    })
  }

  submit() {
    console.log(this.productForm)
    if (this.productForm && this.productForm.value && this.productToEdit) {
      const editedProduct = this.productForm.value as Product
      console.log(editedProduct)
      this.productsService.updateProduct(this.productToEdit.slug, editedProduct).subscribe((res) => {
        console.log(res)
        this.router.navigate(['', 'products'])
      }, err => {
        this.error = 'Something went wrong! Be sure that slug is unique and not already being used on this webshop.'
        console.log(err)
      })
    }
  }
}
