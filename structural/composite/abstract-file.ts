export abstract class AbstractFile {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract view(): void;
};
