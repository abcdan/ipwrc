import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private httpClient: HttpClient) {}

  fetchOrder(orderId: string) {
    return this.httpClient.get('order/fetch/' + orderId)
  }

  allOrders() {
    return this.httpClient.get('order/all')
  }

  deleteOrder(order: string) {
    return this.httpClient.delete('order/delete/' + order)
  }
  
  togglePaid(order: string) {
    return this.httpClient.patch('order/togglepaid/' + order, {})
  }

  toggleDelivered(order: string) {
    return this.httpClient.patch('order/toggledelivery/' + order, {})

  }
}
