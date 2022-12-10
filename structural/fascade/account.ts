export abstract class Account {
  constructor (protected amount: number = 0) {}
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
};
