import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }
  // TOOD: rename lol, or not. it's funny cause Playboi Carti is an artist
  playboiCarti: any[] | undefined

  ngOnInit(): void {
    this.playboiCarti = this.cart.getCartItems()
    console.log(this.playboiCarti)
  }



}
