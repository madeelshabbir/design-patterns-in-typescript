import { AbstractFile } from './abstract-file';

export class File extends AbstractFile {
  private content: string;

  constructor(name: string, content: string) {
    super(name);
    this.content = content;
  }

  view(): void {
    console.log(this.content);
  }
};
