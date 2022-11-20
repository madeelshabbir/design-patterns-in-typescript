export abstract class PaymentMethod {
  protected transactionId;

  protected abstract makeTransaction(): string;

  pay(): string {
    return this.transactionId = this.makeTransaction();
  }

  getTransaction(): string {
    return this.transactionId;
  }
};
