import { Injectable } from '@angular/core';
import { ItemComponent } from './item/item.component';
import {cartItem} from "../models/cartItem";
import {BehaviorSubject} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartSubject = new BehaviorSubject(this.getCartItems())

  constructor(private httpClient: HttpClient) { }

  getCartItems(): cartItem[] {
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

  addProductToShoppingCart(item: any): boolean {
    try {
      let currentShoppingItems = this.getCartItems();

      console.log(currentShoppingItems)
      const existingProductIndex = currentShoppingItems.findIndex(
        (cartItem: any) => cartItem.product.slug === item.product.slug)
        console.log(existingProductIndex)

      if (existingProductIndex !== -1) {
        currentShoppingItems[existingProductIndex].amount += item.amount
      } else {
        currentShoppingItems.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(currentShoppingItems));
      this.cartSubject.next(currentShoppingItems)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  setCart(items: ItemComponent[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  clearCart() {
    localStorage.setItem('cart', JSON.stringify([]))
  }

  createOrder(order: any) {
    return this.httpClient.post('order/create', order)
  }

}
