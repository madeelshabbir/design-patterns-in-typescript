export abstract class Attachment {
  constructor(protected fileName: string) {
    this.fileName = fileName
  }

  abstract details(): string;
};
