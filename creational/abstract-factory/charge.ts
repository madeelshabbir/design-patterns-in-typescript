export abstract class Charge {
  constructor(protected amount: number, protected platform: string) {
    this.amount = amount;
    this.platform = platform;
  }
};
