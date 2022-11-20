import { PaymentMethod } from './payment-method';

export class Paypal extends PaymentMethod {
  makeTransaction(): string {
    return 'PaypalApiCallReturedTransactionId';
  }
};
