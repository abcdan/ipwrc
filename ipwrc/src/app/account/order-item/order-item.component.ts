import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() item: cartItem | any
  @Output() updated: EventEmitter<cartItem> = new EventEmitter();
  @Input() editable: boolean | any

  constructor() { }


  ngOnInit(): void {
  }

  updateAmount(newAmount: number) {
    this.item.amount = newAmount
    this.updated.emit(this.item)
  }

}
