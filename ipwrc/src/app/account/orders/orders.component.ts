import { Component, OnInit } from '@angular/core';
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
    private authService: AuthserviceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.authService.me().subscribe((res: any) => {
      let orderData = res['orders'] as order[]
      this.orders = orderData
    }, err => {
      console.log(err)
    })
    
  }
}
