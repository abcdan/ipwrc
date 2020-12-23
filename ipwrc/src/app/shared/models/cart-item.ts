import {Product} from "../../product/product";

export interface OrderItem {
  product: Product
  amount: number
}