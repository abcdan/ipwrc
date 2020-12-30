import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(
      "product/all",
    )
  }

  getProduct(slug: string) {
    return this.httpClient.get(
      "product/fetch/" + slug
    )
  }

  updateProduct(slug: string, product: Product) {
    return this.httpClient.post(
      "product/edit/" + slug, product)
  }
  
  createProduct(product: Product) {
    return this.httpClient.post(
      "product/create/", product)
  }
}
