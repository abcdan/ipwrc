import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]
  constructor(private productsService: ProductsService) {
    this.products = []
   }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((response: any)=> {
      console.log(response)
      this.products = response.products as Product[]
    }, error => {
      // TODO display appropriate error
      // nee lukas
    });
  }

}
