import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { orderItem } from 'src/app/models/orderItem';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  cartData: any[] | undefined
  editable: boolean =  true

  constructor(private cart: CartService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.cartData = this.cart.getCartItems()
  }

  

  update(item: any): void {
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

  makeOrderFromCart() {
    const localCartData = this.cart.getCartItems()
    
    const orderData = []
    for (let i = 0; i < localCartData.length; i++) {
      const element = localCartData[i];
      let orderProduct = {
        amount: element.amount,
        slug: element.product.slug
      } as orderItem
      orderData.push(orderProduct)
    }

    console.log(orderData)

    this.cart.createOrder(orderData).subscribe(res =>{
      this.cart.setCart([])
      window.location.href="/account/orders"
      // this.router.navigate(['/account/orders'])
    }, err => {
      Swal.fire('Error', 'Couldn\'t create the order. Try again (maybe clear your cart?)', 'error')
      console.log(err)
    })
  }

}
