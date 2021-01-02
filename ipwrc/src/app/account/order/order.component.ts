import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';
import { order } from 'src/app/models/order';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: order | undefined
  error: string = ''
  constructor(private orderService: OrderserviceService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.orderService.fetchOrder(params['orderId']).subscribe((res: any) => {
        this.order = res as order
        console.log(this.order)
      }, err => {
        this.error = 'Couldn\'t find an order with that id'
        console.log(err)
      })
    })
  }


  getTotalPrice(): number {
    if(this.order) {
      let price = 0
      this.order.products.forEach(item => {
        let _item: any = item
        price += _item.price * _item.amount
      })
      return price
    }
    return 0
  }

}
