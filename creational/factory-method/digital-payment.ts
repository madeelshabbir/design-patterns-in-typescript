import { CreditCard } from './credit-card';
import { Payment } from './payment';
import { PaymentMethod } from './payment-method';
import { Paypal } from './paypal'
import { WebMoney } from './web-money';

export class DigitalPayment extends Payment {
  createMethodInstance(type: string): PaymentMethod {
    switch(type) {
      case 'credit-card': {
        return new CreditCard();
      }
      case 'paypal': {
        return new Paypal();
      }
      case 'web-money': {
        return new WebMoney();
      }
    }

    throw new Error('Invalid type!');
  }
};
