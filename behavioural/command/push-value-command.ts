import { Command } from './command';
import { Stack } from './stack';

export class PushValueCommand implements Command {
  constructor(private stack: Stack, private value: any) {}

  execute(): void {
    this.stack.push(this.value);
  }

  unexecute(): void {
    this.stack.pop();
  }

  isReversible(): boolean {
    return true;
  }
}
