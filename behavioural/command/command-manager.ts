import { Command } from './command';

export class CommandManager {
  private history: Array<string> = [];

  constructor(private command: Command) {}

  invokeCommand(): void {
    this.command.execute();
    this.history.push(`${this.command.constructor.name} is executed.`);
  }

  revokeCommand(): void{
    if (this.command.isReversible()) {
      this.command.unexecute();
      this.history.push(`${this.command.constructor.name} is reversed.`);
    }
    else console.log('Command is not reversible')
  }
}
