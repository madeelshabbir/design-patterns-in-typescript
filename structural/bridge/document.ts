import { Attachment } from './attachment';

export class Document extends Attachment {
  details(): string {
    return`Doc: ${this.fileName}`;
  }
};
