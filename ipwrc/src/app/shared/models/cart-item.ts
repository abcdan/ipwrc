import {ProductModel} from "../../models/productModel";

export interface OrderItem {
  product: ProductModel
  amount: number
}
