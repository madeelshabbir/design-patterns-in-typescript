import { Model } from './model';

export class Comment extends Model {
  show(): void {
    console.log(`<# Comment ${this.attachment.details()} >`);
  }
};
