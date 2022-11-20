import { PaymentMethod } from './payment-method';

export class CreditCard extends PaymentMethod {
  makeTransaction(): string {
    return 'CreditCardApiCallReturedTransactionId';
  }
};
