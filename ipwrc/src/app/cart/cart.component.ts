import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { cartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { CartService } from './cart.service';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any[] | undefined

  constructor(private cart: CartService) { 
  }

  ngOnInit(): void {
    this.cartData = this.cart.getCartItems()
  }

  

  update(item: any): void {
    // well een zakje chips ooelleh. docent als je dit leest groetjes Lukas <3
    if(this.cartData) {
      for (let i = 0; i < this.cartData.length; i++) {
        if (this.cartData[i] === item) {
          this.cartData[i] = item;
        }
      }
      this.cart.setCart(this.cartData)
    }
  }

  onClearCart() {
    if (this.cartData) {
      this.cart.setCart([])
      this.cartData = []
    }
  }

  clearCart() {
    this.cart.clearCart()
    this.cartData = this.cart.getCartItems()
    // Sorry docenten, het moest. Angular update niet <3
    window.location.reload()
  }
}
