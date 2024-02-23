import { Product } from "./Product"

export interface Cart {
    products: Product[],
    sumPrice: number
  }