import { IFulfillmentService } from './i-fulfillment-service';

export class Warehouse implements IFulfillmentService {
  private quantity: number;

  constructor(defaultQuantity: number) {
    this.quantity = defaultQuantity;
  }

  getQuantity(): number {
    return this.quantity;
  }

  fulfillOrder(quantity: number): void {
    this.quantity -= quantity;
  }

  addItem(quantity: number) {
    this.quantity += quantity;
  }
};
