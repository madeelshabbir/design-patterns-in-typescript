export abstract class File {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  show(): void {
    console.log(this.read());
  }

  protected abstract read(): string;
};
