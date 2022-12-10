import { IFulfillmentService } from './i-fulfillment-service';
import { Warehouse } from './warehouse';

export class FulfillmentProxy implements IFulfillmentService {
  private warehouses: Array<Warehouse>;

  constructor() {
    this.warehouses = this.loadWarehouses();
  }

  fulfillOrder(quantity: number): void {
    if (quantity > this.totalQuanity()) {
      console.log('Insufficient quantity, fulfilled failed!');
      return;
    }

    this.warehouses.forEach(warehouse => {
      if (quantity < warehouse.getQuantity()) {
        warehouse.fulfillOrder(quantity);
        return;
      }
      else {
        quantity -= warehouse.getQuantity();
        warehouse.fulfillOrder(quantity);
      }
    });
    console.log('Order fulfilled!');
  }

  private totalQuanity() {
    let quanity = 0;
    this.warehouses.forEach(warehouse => {
      quanity += warehouse.getQuantity();
    });

    return quanity;
  }

  private loadWarehouses(): Array<Warehouse> {
    return [new Warehouse(10), new Warehouse(5)];
  };
};
