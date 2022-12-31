import { File } from './file';

export class Document extends File {
  read(): string {
    return 'Document content';
  }
};
