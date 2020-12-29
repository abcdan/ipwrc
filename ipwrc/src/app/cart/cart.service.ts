import { Injectable } from '@angular/core';
import { ItemComponent } from './item/item.component';
import {cartItem} from "../models/cartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getShoppingCartItems(): cartItem[] {
    try {
      const cartItems = localStorage.getItem('cart')
      const items = JSON.parse(<string>cartItems) as cartItem[];
      if (!items) { return [] }
      return items
    }
    catch (e) {
      return []
    }
  }

  addProductToShoppingCart(item: cartItem): boolean {
    try {
      // add to existing products
      let currentShoppingItems = this.getShoppingCartItems();

      // if same product we want to add to the existing amount
      const existingProductIndex = currentShoppingItems.findIndex(
        (cartItem) => cartItem.product.id == item.product.id)

      if (existingProductIndex !== -1) {
        currentShoppingItems[existingProductIndex].amount += item.amount
      } else {
        currentShoppingItems.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(currentShoppingItems));
      this.cartSubject.next(currentShoppingItems)
      return true
    } catch (e) {
      return false
    }
  }

  setCart(items: ItemComponent[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }
  clearCart() {
    localStorage.removeItem('cart')
  }
}
