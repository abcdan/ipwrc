import { Injectable } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  setCart(items: ItemComponent[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }
  clearCart() {
    localStorage.removeItem('cart')
  }
}
