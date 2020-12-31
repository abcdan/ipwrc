import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  cartData: any[] | undefined
  editable: boolean =  true

  constructor(private cart: CartService) { 
  }

  ngOnInit(): void {
    this.cartData = this.cart.getCartItems()
  }

  

  update(item: any): void {
    if(this.cartData) {
      for (let i = 0; i < this.cartData.length; i++) {
        if (this.cartData[i] === item) {
          this.cartData[i] = item;
        }
      }
      this.cart.setCart(this.cartData)
    }
  }

  removeFromCart(item: any): void {
    // TODO: add remove from cart
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
    window.location.reload()
  }

}
