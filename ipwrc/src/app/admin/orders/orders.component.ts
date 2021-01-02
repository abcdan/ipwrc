import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/account/orderservice.service';
import { AuthserviceService } from 'src/app/authentication/authservice.service';
import { CartService } from 'src/app/cart/cart.service';
import { order } from 'src/app/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: order[] | undefined

  constructor(private cartService: CartService, 
    private orderService: OrderserviceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.orderService.allOrders().subscribe((res: any) => {
      let orderData = res as order[]
      this.orders = orderData

    }, err => {
      console.log(err)
    })
    
  }

}
