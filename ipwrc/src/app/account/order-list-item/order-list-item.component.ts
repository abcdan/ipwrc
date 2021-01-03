import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { order } from 'src/app/models/order';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {
  @Input() order: order | undefined

  constructor() { }

  ngOnInit(): void {
  }

  toDisplayabledate(): string {
    if(this.order) {
      return moment(this.order.createdAt).calendar()
    }
    return ''
  }
}
