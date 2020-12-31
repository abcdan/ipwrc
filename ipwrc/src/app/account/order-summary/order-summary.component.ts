import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Input() items: cartItem[] | undefined
  @Input() makeOrderFromCart: Function | any;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  

  getTotalPrice(): number {
    if(this.items) {
      let price = 0
      this.items.forEach(item => {
        let _item: any = item
        price += _item.product.price * _item.amount
      })
      return price
    }
    return 0
  }

  countProducts(): number {
    if(this.items) {
      let itemCount = 0
      this.items.forEach(item => {
        itemCount += item.amount
      })
      return itemCount
    }
    return 0
  }

  placeOrder() {
    this.makeOrderFromCart()
  }
}
