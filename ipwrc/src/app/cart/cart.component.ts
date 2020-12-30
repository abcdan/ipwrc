import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  clearCart() {
    this.cart.clearCart()
    this.cartData = this.cart.getCartItems()
    // Sorry docenten, het moest. Angular update niet <3
    window.location.reload()
  }
}
