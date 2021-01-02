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
}
