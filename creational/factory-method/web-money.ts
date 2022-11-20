import { PaymentMethod } from './payment-method';

export class WebMoney extends PaymentMethod {
  makeTransaction(): string {
    return 'WebMoneyApiCallReturedTransactionId';
  }
};
