import { Attachment } from './attachment';

export class Image extends Attachment {
  details(): string {
    return`Image: ${this.fileName}`;
  }
};
