export class Stack {
  private data: Array<string> = [];

  push(value: any): void {
    this.data.push(value);
  }

  pop(): void {
    this.data.pop();
  }
}
