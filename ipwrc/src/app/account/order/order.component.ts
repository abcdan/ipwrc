import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/authservice.service';
import { user } from 'src/app/authentication/user';
import { order } from 'src/app/models/order';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: order | undefined
  user: user | undefined
  error: string = ''
  admin: boolean = false
  constructor(private orderService: OrderserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthserviceService) { }

  ngOnInit(): void {
    this.getAdmin()
    this.route.params.subscribe((params: any) => {
      this.orderService.fetchOrder(params['orderId']).subscribe((res: any) => {
        this.order = res['order'] as order
        this.user = res['user'] as user
        console.log(this.order)
      }, err => {
        this.error = 'Couldn\'t find an order with that id'
        console.log(err)
      })
    })
  }


  getAdmin() {
    this.authService.check().subscribe((res: any) => {
      this.admin = res.admin
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

  deleteOrder() {
    if(this.order) { 
      this.orderService.deleteOrder(this.order._id).subscribe((res: any) => {
        this.order = undefined
        this.error = 'Order got deleted, can\'t find an order with this ID anymore.'
      }, (err: any) => {
        console.log(err)
      })
    }
  }

  togglePaid() {
    if(this.order) { 
      this.orderService.togglePaid(this.order._id).subscribe((res: any) => {
        if(this.order) 
          this.order.paid = !this.order.paid
      }, (err: any) => {
        console.log(err)
      })
    }
  }

  toggleDelivered() {
    if(this.order) {
      this.orderService.toggleDelivered(this.order._id).subscribe((res: any) => {
        if(this.order) 
          this.order.delivered = !this.order.delivered
      }, (err: any) => {
        console.log(err)
      })
    }
  }
}
