import { File } from './file';

export class Image extends File {
  read(): string {
    return 'Image content';
  }
};
