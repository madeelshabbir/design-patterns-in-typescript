import { Charge } from './charge';
import { Product } from './product';

export interface Platform {
  createProduct(type: string, title: string, price: number): Product;
  createCharge(type: string, amount: number): Charge;
};
