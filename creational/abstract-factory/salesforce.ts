import { Appliance } from './appliance';
import { Charge } from './charge';
import { Gadget } from './gadget';
import { Platform } from './platform';
import { Product } from './product';
import { RecurringCharge } from './recurring-charge';

export class Salesforce implements Platform {
  createProduct(type: string, title: string, price: number): Product {
    switch(type) {
      case 'appliance': {
        return new Appliance(title, price, this.constructor.name);
      }
      case 'gadget': {
        return new Gadget(title, price, this.constructor.name);
      }
    }

    throw new Error('Invalid type!');
  }

  createCharge(type: string, amount: number): Charge {
    switch(type) {
      case 'recurring-charge': {
        return new RecurringCharge(amount, this.constructor.name);
      }
    }

    throw new Error('Invalid type!');
  }
};
