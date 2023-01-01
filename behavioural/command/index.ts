import { CommandManager } from './command-manager';
import { PushValueCommand } from './push-value-command';
import { Stack } from './stack';

const stack = new Stack();
const command = new PushValueCommand(stack, 10);
const commandManager = new CommandManager(command);
commandManager.invokeCommand();
commandManager.revokeCommand();
commandManager.invokeCommand();
commandManager.invokeCommand();
commandManager.invokeCommand();
commandManager.invokeCommand();
commandManager.revokeCommand();
console.log(stack);
console.log(commandManager);
