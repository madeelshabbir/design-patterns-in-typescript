export interface Command {
  execute(): void;
  unexecute(): void;
  isReversible(): boolean;
}
