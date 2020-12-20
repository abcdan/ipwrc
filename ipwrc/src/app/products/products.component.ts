import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]
  constructor() {
    this.products = []
   }

  ngOnInit(): void {
    this.products.push(
      new Product("Kanker mooie fiets", "Deze fiets is kanker mooi", "https://file.coffee/u/DbO6N-PokW.jpeg", 6.90)
    )
    this.products.push(
      new Product("Kanker mooie fiets", "Deze fiets is kanker mooi", "https://file.coffee/u/DbO6N-PokW.jpeg", 6.90)
    )
    this.products.push(
      new Product("Kanker mooie fiets", "Deze fiets is kanker mooi", "https://file.coffee/u/DbO6N-PokW.jpeg", 6.90)
    )
    this.products.push(
      new Product("Kanker mooie fiets", "Deze fiets is kanker mooi", "https://file.coffee/u/DbO6N-PokW.jpeg", 6.90)
    )
  }

}
