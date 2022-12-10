import { OldVendingMachine } from './old-vending-machine';
import { TouchScreenVendingMachine } from './touchscreen-vending-machine';

const vendingMachine = new TouchScreenVendingMachine(new OldVendingMachine());
vendingMachine.chooseFirstSelection();
vendingMachine.chooseSecondSelection();
