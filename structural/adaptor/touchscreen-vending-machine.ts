import { IVendingMachine } from './i-vending-machine';
import { OldVendingMachine } from './old-vending-machine';

export class TouchScreenVendingMachine implements IVendingMachine {
  private machine: OldVendingMachine;

  constructor(oldMachine: OldVendingMachine) {
    this.machine = oldMachine;
  }

  chooseFirstSelection(): void {
    this.machine.selectA();
  }

  chooseSecondSelection(): void {
    this.machine.selectB();
  }
};
