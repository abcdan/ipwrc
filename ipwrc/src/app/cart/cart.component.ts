import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // TOOD: rename lol, or not. it's funny cause Playboi Carti is an artist
  playboiCarti: any[]

  constructor(private cart: CartService) { 
    this.playboiCarti = this.cart.getCartItems()
    console.log(this.playboiCarti)
  }

  ngOnInit(): void {
  }

  getTotalPrice(): number {
    let price = 0
    this.playboiCarti.forEach(item => {
      price += item.product[0].price 
    })
    return price
  }

  countProducts(): number {
    let items = 0
    this.playboiCarti.forEach(item => {
      items += item.amount
    })
    return items
  }



}
