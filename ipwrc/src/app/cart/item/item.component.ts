import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: cartItem | any
  @Output() updated: EventEmitter<cartItem> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  updateAmount(newAmount: number) {
    this.item.amount = newAmount
    this.updated.emit(this.item)
  }
}
