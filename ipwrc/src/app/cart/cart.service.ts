import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  setCartItems(items: OrderItem[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }
  clearCart() {
    localStorage.removeItem('cart')
  }
}
