import { BankService } from './bank-service';

const bankService = new BankService();
bankService.createAccount();
bankService.deposit(10);
bankService.withdraw(3);
