import { Account } from './account';

export class CheckingAccount extends Account {
  deposit(amount: number): void {
    this.amount += amount;
    console.log(`Successfully depoit ${amount}, current amount is ${this.amount}.`);
  }

  withdraw(amount: number): void {
    if (this.amount < amount) {
      console.log(`Insufficient balance, current amount is ${this.amount}.`);
      return;
    }

    this.amount -= amount;
    console.log(`Successfully withdrawn ${amount}, current amount is ${this.amount}.`);
  }
};
