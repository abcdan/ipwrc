import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService) { }

  product: any

  ngOnInit(): void {
    this.route.params.subscribe(r => {
      this.productsService.getProduct(r.slug).subscribe(response => {
        this.product = response as Product
      })
    })
  }

}
