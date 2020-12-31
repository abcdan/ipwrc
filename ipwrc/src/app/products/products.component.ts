import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authentication/authservice.service';
import { Product } from '../models/product'
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  admin: boolean = false
  products: Product[]
  constructor(private productsService: ProductsService,
    private authService: AuthserviceService) {
    this.products = []
   }

  ngOnInit(): void {
    this.isAdmin()
    this.productsService.getProducts().subscribe((response: any)=> {
      console.log(response)
      this.products = response.products as Product[]
    });
  }

  isAdmin() {
    this.authService.check().subscribe((res: any) => {
      this.admin = res.admin as boolean
    })
  }

  deleteProduct(slug: string) {
    console.log(slug)
    this.productsService.deleteProduct(slug).subscribe(res => {
      window.location.reload()
      console.log(res)
    })
  }

}
