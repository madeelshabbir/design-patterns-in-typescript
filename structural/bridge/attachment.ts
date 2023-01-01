export abstract class Attachment {
  constructor(protected fileName: string) {}

  abstract details(): string;
};
