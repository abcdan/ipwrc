import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-order-detail-item',
  templateUrl: './order-detail-item.component.html',
  styleUrls: ['./order-detail-item.component.css']
})
export class OrderDetailItemComponent implements OnInit {
  @Input() item: Product | any

  constructor() { }

  ngOnInit(): void {
  }

}
