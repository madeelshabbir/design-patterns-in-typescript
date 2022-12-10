import { Account } from './account';
import { CheckingAccount } from './checking-account';

export class BankService {
  private account: Account;

  createAccount(defaultAmmount: number = 0): void {
    this.account = new CheckingAccount(defaultAmmount);
  }

  deposit(amount: number): void {
    this.account.deposit(amount);
  }

  withdraw(amount: number): void {
    this.account.withdraw(amount);
  }
};
