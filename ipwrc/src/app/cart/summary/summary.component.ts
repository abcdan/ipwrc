import { Component, Input, OnInit, Output } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() items: cartItem[] | undefined
  @Input() clearCart: Function | any;

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

  emptyCart() {
    this.clearCart()
  }

}
