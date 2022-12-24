import { Attachment } from './attachment';

export abstract class Model {
  constructor(protected attachment: Attachment) {
    this.attachment = attachment;
  }
};
