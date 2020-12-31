import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @ViewChild('productForm') productForm: NgForm | undefined
  // editForm: FormGroup | any
  error: string = ''
  productToEdit = {
    slug: '',
    name: '',
    description: '',
    price: 1,
    image: 'https://file.coffee/u/MBR78Dra7g.jpeg'
  } as Product

  constructor(private authService: AuthserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService) { 
  }

  ngOnInit() {
  }

  submit() {
    if (this.productForm && this.productForm.value && this.productToEdit) {
      const newProduct = this.productForm.value as Product
      this.productsService.createProduct(newProduct).subscribe((res) => {
        console.log(res)
        this.router.navigate(['', 'products'])
      }, err => {
        this.error = 'Something went wrong! Be sure that slug is unique and not already being used on this webshop.'
        console.log(err)
      })
    }
  }
}
