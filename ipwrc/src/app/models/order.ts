import { Product } from "./product";

export interface order {
    createdAt: string
    delivered: boolean
    paid: boolean
    userId: string
    _id: string
    products: Product[]
}