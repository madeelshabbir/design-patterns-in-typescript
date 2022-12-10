import { AbstractFile } from './abstract-file';

export class Directory extends AbstractFile {
  private files: Array<AbstractFile> = [];

  view(): void {
    this.files.forEach(file => console.log(file.name))
  }

  addFile(file: AbstractFile) {
    this.files.push(file);
  }
};
