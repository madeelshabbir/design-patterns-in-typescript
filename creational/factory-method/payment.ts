import { PaymentMethod } from './payment-method';

export abstract class Payment {
  protected paymentMethod;

  protected abstract createMethodInstance(type: string): PaymentMethod;

  initiate(type: string): PaymentMethod {
    this.paymentMethod = this.createMethodInstance(type);
    return this.paymentMethod;
  }
};
