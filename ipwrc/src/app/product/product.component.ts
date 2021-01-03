import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/product';
import { cartItem } from '../models/cartItem';
import { ProductsService } from '../products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private cart: CartService) { }

  product: any

  error: string = ''

  ngOnInit(): void {
    this.route.params.subscribe(r => {
      this.productsService.getProduct(r.slug).subscribe(response => {
        if(response.toString().length === 0 ) {
          return this.router.navigate(['/products'])
        }
        this.product = response as Product
        return
      }, err => {
        this.error = 'Couldn\'t find or load the product.'
      })
    })
  }

  addToCart() {
    const item = {
      product: this.product,
      amount: 1
    } as cartItem 
    this.cart.addProductToShoppingCart(item)
    Swal.fire('Added to cart!', 'You\'ve successfully added the item to your cart', 'success')
  }

}
